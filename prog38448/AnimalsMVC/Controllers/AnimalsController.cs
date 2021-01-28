using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using AnimalsMVC.Models;

namespace AnimalsMVC.Controllers
{
    public class AnimalsController : Controller
    {
        private IData _data;

        public AnimalsController (IData data)
        {
            _data = data;
        }

        public IActionResult Index ()
        {
            List<Animal> animals = _data.AnimalsInitializeData ();
            IndexViewModel ivm = new IndexViewModel();
            ivm.Animals = animals;

            return View(ivm);
        }

        public IActionResult Details (int? id)
        {
            Animal animal = _data.GetAnimalById (id);

            if (animal == null) return NotFound();

            return View (animal);
        }
    }
}