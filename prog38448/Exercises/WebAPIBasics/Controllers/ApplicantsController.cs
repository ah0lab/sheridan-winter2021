using Microsoft.AspNetCore.Mvc;
using System.Linq;

using WebAPIBasics.Models;

namespace WebAPIBasics.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicantsController : ControllerBase
    {
        [HttpGet]
        [Route("names")]
        public IActionResult GetNames()
        {
            //return new JsonResult((new PersonDataStore()).Persons);
            return Ok((new PersonDataStore()).Persons);
        }

        [HttpGet]
        [Route("name/{id}")]
        public IActionResult GetName(int id)
        {
            PersonDataStore ds = new PersonDataStore();
            Person p = ds.Persons.FirstOrDefault(p => p.Id == id);

            if (p == null) return NotFound();
            
            //return new JsonResult(p);
            return Ok(p);
        }
    }
}