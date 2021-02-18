using System.Collections.Generic;

namespace WebAPIBasics.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public List<Skill> Skills { get; set; }

        public Person()
        {
            Skills = new List<Skill>();
        }
    }
}