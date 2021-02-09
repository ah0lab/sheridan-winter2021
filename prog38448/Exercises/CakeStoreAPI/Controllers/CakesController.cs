using Microsoft.AspNetCore.Mvc;
using CakeStoreAPI.Models;
using System.Collections.Generic;

namespace CakeStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CakesController : Controller
    {
        private readonly IData _data;

        public CakesController(IData data)
        {
            _data = data;
        }

        [HttpGet("/api/Cakes")]
        public ActionResult<List<Cake>> GetAll()
        {
            return new ObjectResult(_data.CakesInitializedData());
        }

        [HttpGet("/api/Cake/{id}", Name = "GetCake")]
        public ActionResult<Cake> GetById(int? id)
        {
            var item = _data.GetCakeById(id);

            if (item == null) return NotFound();

            return new ObjectResult(item);
        }
    }
}