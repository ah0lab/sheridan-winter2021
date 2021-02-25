using System.Collections.Generic;

namespace BA_MT.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        
        public virtual ICollection<Course> Courses { get; set; }
    }
}