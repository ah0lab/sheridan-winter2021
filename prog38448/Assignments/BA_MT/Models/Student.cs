using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace BA_MT.Models
{
    public class Student : IValidatableObject
    {
        public int Id { get; set; }
        
        [Required(ErrorMessage="Please enter a first name")]
        public string FirstName { get; set; }
        
        [Required(ErrorMessage="Please enter a last name")]
        public string LastName { get; set; }
        
        [Required(ErrorMessage="Please Enter a birthdate")]
        public DateTime Birthday { get; set; } 
        
        public virtual ICollection<Course> Courses { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext context)
        {
            var validationResults = new List<ValidationResult>();

            if (LastName.Length < 3 || LastName.Length > 15)
            {
                validationResults.Add(
                    new ValidationResult(
                        "Last name should be between 2 to 16 characters long",
                        new [] {"LastName"})
               );
            }
            
            if ( DateTime.Compare(Birthday, new (1981,1,1)) < 0
                 || 
                 DateTime.Compare(Birthday, new (2000, 31, 12)) > 0 )
            {
               validationResults.Add(
                   new ValidationResult(
                       "Birthdate must be between Jan 1st, 1981 and Dec 31st, 2000",
                       new [] {"Birthday"})
              );
            }
            
            return validationResults;
        }
        
    }
}