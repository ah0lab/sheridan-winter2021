using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BA_MT.Models
{
    public class Course : IValidatableObject
    {
        [Key]
        [Required(ErrorMessage = "Course code must be entered")]
        public int Code { get; set; }
        [Required(ErrorMessage = "Course must have a title")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Course must have a credit weight")]
        public int Credits { get; set; }
        
        public virtual ICollection<Student> Students { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext context)
        {
            var validationResults = new List<ValidationResult>();

            if (Code.ToString().Length != 5)
            {
                validationResults.Add(
                    new ValidationResult(
                        "Course code must be 5 digits", new[] {"Code"})
                );
            }

            if (Credits < 3 || Credits > 6 )
            {
                validationResults.Add(
                    new ValidationResult(
                        "Course credits cannot be more than 6 or less than 3",
                        new[] {"Credits"})
                );
            }

            return validationResults;
        }
        
    }
}