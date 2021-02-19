using Microsoft.AspNetCore.Mvc;
using System.Linq;

using WebAPIBasics.Models;

namespace WebAPIBasics.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicantsController : ControllerBase
    {
        private readonly PersonDataStore _ds; 
        
        public ApplicantsController(PersonDataStore ds)
        {
            _ds = ds;
        }
        
        
        [HttpGet]
        [Route("names")]
        public IActionResult GetNames()
        {
            //return new JsonResult((new PersonDataStore()).Persons);
            //return Ok((new PersonDataStore()).Persons);
            //return Ok(_ds.Persons);
            return Ok(_ds.GetAll());
        }

        [HttpGet]
        [Route("name/{id}", Name = "GetById")]
        public IActionResult GetName(int id)
        {
            //PersonDataStore ds = new PersonDataStore();
            //Person p = ds.Persons.FirstOrDefault(p => p.Id == id);

            //Person p = _ds.Persons.FirstOrDefault(p => p.Id == id);
            Person p = _ds.GetById(id);

            if (p == null) return NotFound();
            
            //return new JsonResult(p);
            return Ok(p);
        }

        [HttpPost]
        public IActionResult CreateApplicant([FromBody] Person p)
        {
            Person np = _ds.Add(p);
            return CreatedAtRoute("GetById", new {id = np.Id}, np);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateApplicant(int id, [FromBody] Person p)
        {
            if (id != p.Id) return BadRequest();

            if (_ds.GetById(id) == null) return NotFound();

            Person up = _ds.Update(p);

            return Ok(up);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteApplicant(int Id)
        {
            if (_ds.GetById(Id) == null) return NotFound();

            Person dp = _ds.Delete(Id);

            //return Ok(dp);
            return NoContent();
        }
    }
}