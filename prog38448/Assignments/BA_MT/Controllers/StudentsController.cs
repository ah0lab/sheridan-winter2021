using System;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using BA_MT.Models;
using BA_MT.Data;

namespace BA_MT.Controllers
{
    public class StudentsController : Controller
    {
        private readonly SRMSContext _dbContext;

        public StudentsController(SRMSContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        public IActionResult Index() => View(_dbContext.Students.ToList());

        public IActionResult Create() => View();

        [HttpPost]
        public IActionResult Create(
            [Bind("Id, FirstName, LastName, Birthday")]
            Student student)
        {
            System.Diagnostics.Debug.WriteLine(student.Birthday.ToString());
            if (!ModelState.IsValid) return View(student);

            _dbContext.Add(student);
            _dbContext.SaveChanges();
            
            return RedirectToAction("Index");
        }

        public IActionResult Details(int? id)
        {
            if (id == null) return NotFound();

            var fetchedStudent = _dbContext.Students.FirstOrDefault(s => s.Id == id);

            if (fetchedStudent == null) return NotFound();

            return View(fetchedStudent);
        }

        public IActionResult Edit(int? id)
        {
            if (id == null) return NotFound();

            var fetchedStudent = _dbContext.Students.FirstOrDefault(s => s.Id == id);

            if (fetchedStudent == null) return NotFound();

            return View(fetchedStudent);
        }
        
        [HttpPost]
        public IActionResult Edit(int? id,
            [Bind("Id, FirstName, LastName, Birthday")]Student student)
        {
            if (id == null) return NotFound();

            if (!ModelState.IsValid) return View(student);

            _dbContext.Update(student);
            _dbContext.SaveChanges();

            return RedirectToAction("Index");
        }

        public IActionResult Delete(int? id)
        {
            if (id == null) return NotFound();

            var fetchedStudent = _dbContext.Students.FirstOrDefault(s => s.Id == id);

            if (fetchedStudent == null) return NotFound();

            return View(fetchedStudent);
        }

        [HttpPost, ActionName("Delete")]
        public IActionResult DeleteConfirm(int id)
        {
            var fetchedStudent = _dbContext.Students.FirstOrDefault(s => s.Id == id);

            if (!ModelState.IsValid || fetchedStudent == null) return NotFound();

            _dbContext.Remove(fetchedStudent);
            _dbContext.SaveChanges();

            return RedirectToAction("Index");
        }

        public IActionResult Enroll(int? id)
        {
            if (id == null) return NotFound();

            var fetchedStudent = _dbContext.Students.FirstOrDefault(s => s.Id == id);

            if (fetchedStudent == null) return NotFound();

            return View(fetchedStudent);
        }

    }
}