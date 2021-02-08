using Microsoft.AspNetCore.Mvc;

namespace BA_A1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();
    }
}