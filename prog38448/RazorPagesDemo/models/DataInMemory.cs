using System;
using System.Collections.Generic;
using System.Linq;

namespace RazorPagesDemo.Models
{
    public class DataInMemory : IData
    {
        public List<Actor> ActorsList {get;set;}
        public List<Actor> ActorsInitializeData()
        {
            return new List<Actor>() {
                new Actor() {
                    Id = 101, Firstname = "FN1", Lastname = "LN1",
                    KnownFor = "M1", OscarWinner = true, ImageName = "a1.jpg"
                },
                new Actor() {
                    Id = 102, Firstname = "FN2", Lastname = "LN2",
                    KnownFor = "M2", OscarWinner = false, ImageName = "a2.jpg"
                }
            };
        }
        public Actor GetActorById (int? id)
        {
            if (id == null) {
                return null;
            } else {
                return ActorsList.SingleOrDefault (a => a.Id == id);
            }
        }

    }
}