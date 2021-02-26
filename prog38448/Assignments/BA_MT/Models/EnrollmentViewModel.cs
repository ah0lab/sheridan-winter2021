using System;
using System.Collections.Generic;
using BA_MT.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace BA_MT.Models
{
    public class EnrollmentViewModel
    {
        public Student Student { get; set; }
        public Course SelectedCourse { get; set; }

        public EnrollmentViewModel(Student student, Course course)
        {
            Student = student;
            SelectedCourse = course;
        }
    }
}