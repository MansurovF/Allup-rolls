using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
//using CarBack.Models;



namespace CarBack.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            //List<Cars> cars = new List<Cars>
            //{
            //    new Cars{Id = 1,No="Porcshe"},
            //    new Cars{Id = 2,No="Bugatti"},
            //    new Cars{Id = 3,No="Range Rover"},
            //    new Cars{Id = 4,No="Dodge"},
            //};
            //return View(cars);
            return View();
        }
    }
}
