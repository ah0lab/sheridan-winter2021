using Microsoft.AspNetCore.Mvc;

namespace BA_MT.Controllers
{
    public class CoursesController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}