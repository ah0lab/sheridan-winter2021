using Microsoft.AspNetCore.Mvc;

namespace BA_MT.Controllers
{
    public class StudentsController : Controller
    {
        public IActionResult Index() => View();

        public IActionResult GotoStudents()
            => RedirectToAction("Index", "Students");
        public IActionResult GotoCourses()
            => RedirectToAction("Index", "Courses");
    }
}