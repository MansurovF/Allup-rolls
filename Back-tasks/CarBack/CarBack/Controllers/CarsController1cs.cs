using CarBack.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarBack.Controllers
{
    public class CarsController1cs : Controller
    {
        private readonly List<Cars> _cars;

        public CarsController1cs()
        {
            _cars = new List<Cars>
            {
                new Cars{Id=1,No="Panamera",CarId=1},
                new Cars{Id=2,No="Cayenne GTS",CarId=1},
                new Cars{Id=3,No="911 Carrera 4S",CarId=1},
                new Cars{Id=4,No="Chiron",CarId=2},
                new Cars{Id=5,No="Divo",CarId=2},
                new Cars{Id=6,No="Vogue",CarId=3},
                new Cars{Id=7,No="RR Sport SVR",CarId=3},
                new Cars{Id=8,No="Charger",CarId=4},
            };
        }
        public IActionResult Index(int?Id)
        {
            if (Id==null)
            {
                return View(_cars);
            }
            if (_cars.Exists(s=>s.CarId==Id))
            {
                return View(_cars.FindAll(s => s.CarId == Id));
            }
            else
            {
                return NotFound();
            }
        }
        public IActionResult Detail(int? Id) 
        {
            if (Id==null)
            {
                return BadRequest();
            }
            if (_cars.Exists(s => s.Id == Id)) 
            {
                return View(_cars.Find(s => s.Id == Id));
            }
            else
            {
                return NotFound();
            }
        }
    }
}
