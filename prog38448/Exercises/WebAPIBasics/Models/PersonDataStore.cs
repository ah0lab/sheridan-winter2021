using System.Collections.Generic;
using System.Linq;

namespace WebAPIBasics.Models
{
    public class PersonDataStore
    {
        public List<Person> Persons { get; set; }

        public PersonDataStore()
        {
            Persons = new List<Person>
            {
                new ()
                {
                    Id = 101, 
                    FirstName = "Amandeep", 
                    LastName = "Patti",
                    Skills = new List<Skill> {
                       new () { 
                           Technology = "C#",
                           Level = 5
                       },
                       new () {
                           Technology = "ASP.NET",
                           Level = 5
                       }
                    }
                },
                new ()
                {
                    Id = 102, 
                    FirstName = "Ben", 
                    LastName = "Ahola",
                    Skills = new List<Skill> {
                       new () {
                           Technology = "C#",
                           Level = 2
                       },
                       new () {
                           Technology = "GDScript",
                           Level = 2
                       }
                    }
                },
                new ()
                {
                    Id = 103, 
                    FirstName = "FN1", 
                    LastName = "LN1",
                    Skills = new List<Skill> {
                       new()
                       {
                           Technology = "Python",
                           Level = 4
                       },
                       new()
                       {
                           Technology = "Django",
                           Level = 3
                       }
                    }
                },
                new ()
                {
                    Id = 104, 
                    FirstName = "FN2", 
                    LastName = "LN2",
                    Skills = new List<Skill>
                    {
                        new()
                        {
                            Technology = "Linux",
                            Level = 5
                        },
                        new()
                        {
                            Technology = "BaSh",
                            Level = 5
                        }
                    }
                }
            };
        }
        public Person GetById(int Id) => Persons.Find(p => p.Id == Id);

        public List<Person> GetAll() => Persons;

        public Person Add(Person p)
        {
            int maxId = Persons.Max(p => p.Id);

            p.Id = ++maxId;
            Persons.Add(p);
            
            return GetById(p.Id);
        }

        public Person Update(Person p)
        {
            Person op = GetById(p.Id);

            op.FirstName = p.FirstName;
            op.LastName = p.LastName;

            return GetById(p.Id);
        }

        public Person Delete(int Id)
        {
            Person p = GetById(Id);

            Persons.Remove(p);

            return p;
        }
    }
}