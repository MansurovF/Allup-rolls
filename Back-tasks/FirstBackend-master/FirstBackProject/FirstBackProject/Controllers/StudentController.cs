using FirstBackProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace FirstBackProject.Controllers
{
    public class StudentController : Controller
    {

        private readonly List<Student> _students;
        private List<Student> _student;

        public StudentController()
        {
            _student = new List<Student>
            {
                new Student{ Id=1,Name="Panarema",Surname="Generation-4",Age=8 ,GroupId=1 },
                new Student{ Id=2,Name="Cayenne",Surname="Generation-3",Age=6 ,GroupId=1 },
                new Student{ Id=3,Name="Taycan",Surname="Generation-1",Age=2 ,GroupId=1 },
                new Student{ Id=4,Name="M8 Competition",Surname="Generation-2",Age=4 ,GroupId=2 },
                new Student{ Id=5,Name="M5 Copmpetition",Surname="Generation-4",Age=8 ,GroupId=2 },
                new Student{ Id=6,Name="Cullinan",Surname="Generation-2",Age=4 ,GroupId=3 },
                new Student{ Id=7,Name="Phanton",Surname="Generation-3",Age=6 ,GroupId=3 },
            };
        }

        public IActionResult Index(int? id)
        {
            if (id == null)
            {
                return View(_student); 
            }
            if (_student.Exists(s=>s.GroupId== id))
            {
                return View(_student.FindAll(s => s.GroupId == id));
            }
            else
            {
                return NotFound() ;      
            }

            //return View();
        }

        public IActionResult Detail(int? id)
        {
            if (id == null)
            {
                return BadRequest();
            }
            if (_student.Exists(s => s.Id == id))
            {
                return View(_student.Find(s => s.Id == id));
            }
            else
            {
                return NotFound();
            }
        }
    }
}
