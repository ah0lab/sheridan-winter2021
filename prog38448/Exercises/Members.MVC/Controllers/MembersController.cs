using Microsoft.AspNetCore.Mvc;
using Members.Data;

namespace Members.MVC.Controllers
{
    public class MembersController : Controller
    {
        private IRepository _repo;

        public MembersController(IRepository repo)
        {
            _repo = repo;
        }
        
        // GET
        public IActionResult Index()
        {
            return View(_repo.GetAll());
        }

        public IActionResult Details(int? id)
        {
            if (id == null) return BadRequest();

            Member m = _repo.GetById((int) id);

            if (m == null) return NotFound();

            return View(m);
        }
    }
}