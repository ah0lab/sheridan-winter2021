using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using BA_MT.Models;
using BA_MT.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Rendering;

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
            
            var availableCourses = _dbContext.Courses.ToList();

            var courseOptions = new List<SelectListItem>();

            if (fetchedStudent.Courses != null && 
                fetchedStudent.Courses.Any())
            {
                foreach (var course in availableCourses)
                {
                    if (!fetchedStudent.Courses.Contains(course))
                        courseOptions.Add(new SelectListItem {
                            Value = course.Code.ToString(),
                            Text = course.Title
                        });
                }
            }
            else
            {
                foreach (var course in availableCourses)
                {
                    courseOptions.Add(new SelectListItem
                    {
                        Value = course.Code.ToString(),
                        Text = course.Title
                    });
                }
            }

            ViewData["AvailableCourses"] = courseOptions;
            return View(new EnrollmentViewModel(fetchedStudent.Id, availableCourses[0].Code));
        }

        [HttpPost]
        public IActionResult Enroll([Bind("StudentId, SelectedCourseCode")]EnrollmentViewModel evm)
        {
            var fetchedStudent = _dbContext.Students.FirstOrDefault(s => s.Id == evm.StudentId);
            var fetchedCourse = _dbContext.Courses.FirstOrDefault(c => c.Code == evm.SelectedCourseCode);
            
            if (fetchedStudent == null || 
                fetchedCourse == null) return NotFound();

            if (fetchedStudent.Courses == null)
                fetchedStudent.Courses = new List<Course>();
            if (fetchedCourse.Students == null)
                fetchedCourse.Students = new List<Student>();
            
            fetchedStudent.Courses.Add(fetchedCourse);
            fetchedCourse.Students.Add(fetchedStudent);

            _dbContext.Update(fetchedCourse);
            _dbContext.Update(fetchedStudent);
            _dbContext.SaveChanges();
            
            return RedirectToAction("Enroll");
        }

    }
}