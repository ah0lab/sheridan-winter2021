using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BA_MT.Models
{
    public class Course
    {
        [Key]
        public int Code { get; set; }
        public string Title { get; set; }
        public int Credits { get; set; }
        
        public virtual ICollection<Student> Students { get; set; }
    }
}