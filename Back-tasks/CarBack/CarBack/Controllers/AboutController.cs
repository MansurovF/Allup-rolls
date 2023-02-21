using CarBack.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarBack.Controllers
{
    public class AboutController : Controller
    {
        private readonly List<Model> _models;

        public AboutController()
        {
            _models = new List<Model> 
            { 
                new Model{Id=1,Name="Porsche",Models="Panamera",Information="4.8 500-a.g-Vurugu-yoxdur",CarId=1},
                new Model{Id=2,Name="Porsche",Models="Cayenne GTS",Information="4.8 420-a.g-Vurugu-yoxdur",CarId=1},
                new Model{Id=3,Name="Porsche",Models="911 Carrera 4S",Information="3.0 450-a.g-Vurugu-yoxdur",CarId=1},
                new Model{Id=4,Name="Bugatti",Models="Chiron",Information="W-16 1200-a.g Bamper biraz zedelidi",CarId=2},
                new Model{Id=5,Name="Bugatti",Models="Divo",Information="W-16 1250-a.g Suda batib",CarId=2},
                new Model{Id=6,Name="Range Rover",Models="Vogue",Information="5.0 510-a.g Bez kraska",CarId=3},
                new Model{Id=7,Name="Range Rover",Models="RR-Sport",Information="4.2 420-a.g Vurugu-yoxdur ",CarId=3},
                new Model{Id=8,Name="Dodge",Models="Charger",Information="6.4 767-a.g Temiz Amerkanka",CarId=4},
            };
        }
        public IActionResult Index(int?Id)
        {
            if (Id==null)
            {
                return View(_models);
            }
            else
            {
                return NotFound();   
            }
        }
        public IActionResult Detail(int? Id)
        {
            if (Id == null)
            {
                return BadRequest();
            }
            if (_models.Exists(s => s.Id == Id))
            {
                return View(_models.Find(s => s.Id == Id));
            }
            else
            {
                return NotFound();
            }
        }
    }
}
