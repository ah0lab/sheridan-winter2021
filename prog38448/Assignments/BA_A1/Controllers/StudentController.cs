using System.Linq;
using System.Security.Policy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using BA_A1.Models;
using BA_A1.Data;

using BA_A1.Data;

namespace BA_A1.Controllers
{
    public class StudentController : Controller
    {
        // 1. Bring the EF Context in
        private readonly StudentContext _context;

        public StudentController(StudentContext context)
        {
            _context = context;
        }
        
        // GET
        public IActionResult Index()
        {
            return View(_context.Students.ToList());
        }

        public IActionResult Details(int? id)
        {
            if (id == null) return NotFound();

            //Student student = _context.Students.Where(s => s.Id == id).FirstOrDefault();
            Student student = _context.Students.FirstOrDefault(s=> s.Id == id);

            if (student == null) return NotFound();
            
            return View(student);
        }

        public IActionResult Edit(int? id)
        {
            if (id == null) return NotFound();

            Student student = _context.Students.FirstOrDefault(s => s.Id == id);

            if (student == null) return NotFound();
            
            return View(student);
        }

        [HttpPost]
        public IActionResult Details(int id, 
            [Bind("Id,FirstName,LastName,Email,PhoneNumber")] Student student)
        {
            if (id != student.Id) return NotFound();

            if (ModelState.IsValid)
            {
                _context.Update(student);
                _context.SaveChanges();

                return RedirectToAction("Index");
            }

            return View(student);
        }
    }
}