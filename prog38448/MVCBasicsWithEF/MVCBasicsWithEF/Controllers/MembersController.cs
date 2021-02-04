using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using MVCBasicsWithEF.Models;
using MVCBasicsWithEF.Data;

namespace MVCBasicsWithEF.Controllers
{
    public class MembersController : Controller
    {
        private readonly EFContext _context;
        
        public MembersController (EFContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View (await _context.Members.ToListAsync());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(
            [Bind("id,FirstName,LastName")] Member member)
        {
            if (ModelState.IsValid)
            {
                _context.Add(member);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(member);
         }
    }
}