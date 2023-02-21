using AllupTask.DataAccessLayer;
using AllupTask.Models;
using AllupTask.ViewModels.BasketViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace AllupTask.Controllers
{
    public class BasketController : Controller
    {
        private readonly AppDbContext _context;

        public BasketController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> AddBasket(int ? Id)
        {
            if (Id == null) return BadRequest();

            if (await _context.Products.AnyAsync(p => p.IsDeleted == false && p.Id == Id)) return NotFound();

            //Product product = await _context.Products.FirstOrDefaultAsync(p => p.Id == Id && p.IsDeleted == false) ;

            //if (product == null) return NotFound();

            string cookie = HttpContext.Request.Cookies["basket"];
            if (string.IsNullOrWhiteSpace(cookie))
            {
                List<BasketVM> products = new List<BasketVM>
                {
                    new BasketVM{Id = (int)Id, Count=1}
                };
                

                string basket = JsonConvert.SerializeObject(products);
                HttpContext.Response.Cookies.Append("basket", basket);
            }
            else
            {
                List<BasketVM> basketVMs = JsonConvert.DeserializeObject<List<BasketVM>>(cookie);
                

                if (basketVMs.Exists(p=>p.Id ==Id))
                {
                    basketVMs.Find(b => b.Id == Id).Count += 1;
                }
                else
                {
                    basketVMs.Add(new BasketVM { Id = (int)Id, Count = 1 });

                };

                string basket = JsonConvert.SerializeObject(basketVMs);
                HttpContext.Response.Cookies.Append("basket", basket);

            }

            return Ok();
        }

        public async Task<IActionResult> GetBasket()
        {
            string basket = HttpContext.Request.Cookies["basket"];

            List<BasketVM> basketVMs = JsonConvert.DeserializeObject<List<BasketVM>>(basket);

            return Json(basketVMs);

        }
    }
}
