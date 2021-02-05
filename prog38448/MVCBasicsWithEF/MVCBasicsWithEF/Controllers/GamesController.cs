using System.Linq;
using Microsoft.AspNetCore.Mvc;

using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MVCBasicsWithEF.Data;
using MVCBasicsWithEF.Models;

namespace MVCBasicsWithEF.Controllers
{
    public class GamesController : Controller
    {
        private readonly EFContext _context;
        public GamesController(EFContext context)
        {
            _context = context;
        }
        
        // GET
        public IActionResult Index()
        {
            return View(_context.Games.ToList());
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create([Bind("Title,Year")]Game game)
        {
            if (ModelState.IsValid)
            {
                // Save game to database
                _context.Add(game);
                // EF works in batch processing. So we write all 
                // pending changes by calling this.
                _context.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(game);
        }

        public IActionResult Details(int? id)
        {
            if (id == null) return NotFound();

            Game game = _context.Games.Where(g => g.Id == id).FirstOrDefault();

            if (game == null) return NotFound();

            return View(game);
        }

        public IActionResult Edit(int? id)
        {
            if (id == null) return NotFound();

            Game game = _context.Games.Where(g => g.Id == id).FirstOrDefault();

            if (game == null) return NotFound();
            
            return View(game);
        }

        [HttpPost]
        public IActionResult Edit(int id, 
            [Bind("Id,Title,Year")]Game game)
        {
            if (id != game.Id) return NotFound();

            if (ModelState.IsValid)
            {
                _context.Update(game);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(game);
        }

        public IActionResult Delete(int? id)
        {
            if (id == null) return NotFound();

            Game game = _context.Games.Where(g => g.Id == id).FirstOrDefault();

            if (game == null) return NotFound();

            return View(game);
        }

        [HttpPost, ActionName("Delete")]
        public IActionResult ConfirmDelete(int id)
        {
            Game game = _context.Games.Where(g => g.Id == id).FirstOrDefault();
            _context.Remove(game);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        
    }
}