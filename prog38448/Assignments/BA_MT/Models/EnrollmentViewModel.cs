using System;
using System.Collections.Generic;
using BA_MT.Models;

namespace BA_MT.Models
{
    public class EnrollmentViewModel
    {
        public Student Student { get; set; }
        public IEnumerable<Course> Courses { get; set; }

        public EnrollmentViewModel(Student s, IEnumerable<Course> c)
        {
            Student = s;
            Courses = c;
        }
    }
}