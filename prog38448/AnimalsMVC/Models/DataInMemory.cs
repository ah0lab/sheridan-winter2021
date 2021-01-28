using System;
using System.Collections.Generic;
using System.Linq;

namespace AnimalsMVC.Models
{
    public class DataInMemory : IData
    {
        public List<Animal> AnimalsList {get;set;}

        public List<Animal> AnimalsInitializeData ()
        {
            return new List<Animal> (){
                new Animal () {
                    Id = 101, Name = "Elephant", Category = "Mammal",
                    Information = "Warm-blooded, give birth to live babies",
                    ImageName = "elephant.jpg"},
                new Animal () {
                    Id = 102, Name = "Snake", Category = "Reptile",
                    Information = "Cold-blooded, Lays eggs",
                    ImageName = "snake.jpg"},
                new Animal () {
                    Id = 103, Name = "Shark", Category = "Fish",
                    Information = "Cold-blooded, Has fins",
                    ImageName = "shark.jpg"},
                new Animal () {
                    Id = 104, Name = "Parrot", Category = "Bird",
                    Information = "Can fly, Lays eggs",
                    ImageName = "parrot.jpg"}
            };
        }
        public Animal GetAnimalById (int? id)
        {
            if (id == null) {
                return null;
            } else {
                return AnimalsList.SingleOrDefault (a => a.Id == id);
            }
        }
    }
}