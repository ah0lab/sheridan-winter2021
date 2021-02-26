using System;
using System.Collections.Generic;
using BA_MT.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace BA_MT.Models
{
    public class EnrollmentViewModel
    {
        public int StudentId { get; set; } 
        public int SelectedCourseCode { get; set; } 

        public EnrollmentViewModel(){ }
        
        public EnrollmentViewModel(int studentId, int courseCode )
        {
            StudentId = studentId;
            SelectedCourseCode = courseCode;
        }
    }
}