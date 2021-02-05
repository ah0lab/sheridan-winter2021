using System.Linq;
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

        private bool MemberExists(int id)
            => _context.Members.Any(e => e.Id == id);

        public async Task<IActionResult> Index()
        {
            return View (await _context.Members.ToListAsync());
        }

        public async Task<IActionResult> Details(int? id)
        {
            if (id == null) return NotFound();

            var member = await _context.Members
                .FirstOrDefaultAsync(m => m.Id == id);

            if (member == null) return NotFound();

            return View(member);
        }

        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null) return NotFound();

            var member = await _context.Members.FindAsync(id);

            if (member == null) return NotFound();

            return View(member);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id,
            [Bind("Id,FirstName,LastName")] Member member)
        {
            if (id != member.Id) return NotFound();

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(member);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MemberExists(member.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }

                return RedirectToAction(nameof(Index));
            }
            
            return View(member);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ConfirmDelete(int id)
        {
            var member = await _context.Members.FindAsync(id);
            _context.Members.Remove(member);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null) return NotFound();

            var member = await _context.Members
                .FirstOrDefaultAsync(m => m.Id == id);

            if (member == null) return NotFound();

            return View(member);
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