using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using FirstBackProject.Models;
using Group = FirstBackProject.Models.Group;

namespace FirstBackProject.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            List<Group> groups = new List<Group>
            {
                new Group{ Id = 1,No="Porcshe"},
                new Group{ Id = 2,No="BMW"},
                new Group{ Id = 3,No="Rolls-Royce"},
            };
            return View(groups);
        }
    }
}
