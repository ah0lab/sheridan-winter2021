using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Runtime.CompilerServices;
using BA_MT.Models;
using BA_MT.Data;

namespace BA_MT.Controllers
{
    public class CoursesController : Controller
    {
        private readonly SRMSContext _dbContext;

        public CoursesController(SRMSContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        
        // GET
        public IActionResult Index() => View(_dbContext.Courses.ToList());
        public IActionResult Create() => View();

        [HttpPost]
        public IActionResult Create( 
            [Bind("Code, Title, Credits")] Course course)
        {
            if (!ModelState.IsValid) return View(course);

            // Check for dups (How could I do this using the Validate method?)
            if (_dbContext.Courses.Any(c => c.Code == course.Code)) {
                ModelState.AddModelError("Code", 
                    $"Course with code {course.Code.ToString()} already exists!");
                return View(course);
            }

            _dbContext.Add(course);
            _dbContext.SaveChanges();
            
            return RedirectToAction("Index");
        }

        public IActionResult Details(int? code)
        {
            if (code == null) return NotFound();

            var fetchedCourse = _dbContext.Courses.FirstOrDefault(c => c.Code == code);

            if (fetchedCourse == null) return NotFound();

            return View(fetchedCourse);
        }

        public IActionResult Edit(int? code)
        {
            if (code == null) return NotFound();

            var fetchedCourse = _dbContext.Courses.FirstOrDefault(c => c.Code == code);

            if (fetchedCourse == null) return NotFound();

            return View(fetchedCourse);
        }
        
        [HttpPost]
        public IActionResult Edit(int code,
            [Bind("Code, Title, Credits")] Course course)
        {
            if (code != course.Code) return NotFound();

            if (!ModelState.IsValid) return View(course);

            _dbContext.Update(course);
            _dbContext.SaveChanges();

            return RedirectToAction("Index");
        }

        public IActionResult Delete(int? code)
        {
            if (code == null) return NotFound();

            var fetchedCourse = _dbContext.Courses.FirstOrDefault(c => c.Code == code);

            if (fetchedCourse == null) return NotFound();

            return View(fetchedCourse);
        }

        [HttpPost, ActionName("Delete")]
        public IActionResult DeleteConfirm(int code)
        {
            var fetchedCourse = _dbContext.Courses.FirstOrDefault(c => c.Code == code);
            
            if (!ModelState.IsValid || fetchedCourse == null) return NotFound();

            _dbContext.Remove(fetchedCourse);
            _dbContext.SaveChanges();

            return RedirectToAction("Index");
        }
    }
}