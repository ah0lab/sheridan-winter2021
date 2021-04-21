using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ManagerMVC.Models;

namespace ManagerMVC.Controllers
{
    public class DetailsAc_Returns_Bad_ReRequestManagersController : Controller
    {
        private IManagerRepo _repo;

        public DetailsAc_Returns_Bad_ReRequestManagersController(IManagerRepo repo)
        {
            _repo = repo;
        }
        
        // GET: ManagersController
        public ActionResult Index()
        {
            return View();
        }

        // GET: ManagersController/Details/5
        public ActionResult Details(int? id)
        {
            return View();
        }

        // GET: ManagersController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ManagersController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ManagersController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ManagersController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ManagersController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ManagersController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
