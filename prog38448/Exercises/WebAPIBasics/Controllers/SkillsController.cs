using System.Linq;
using Microsoft.AspNetCore.Mvc;

using WebAPIBasics.Models;

namespace WebAPIBasics.Controllers
{
    [Route("api/applicants/{applicantId}/[controller]")]
    [ApiController]
    public class SkillsController : Controller
    {
        private readonly PersonDataStore _ds;
        
        public SkillsController(PersonDataStore ds)
        {
            _ds = ds;
        }
        
        [HttpGet]
        public IActionResult GetSkillsOfApplicant(int applicantId)
        {
            //PersonDataStore ds = new PersonDataStore();
            //Person p = ds.Persons.FirstOrDefault(p => p.Id == applicantId);

            //Person p = _ds.Persons.FirstOrDefault(p => p.Id == applicantId);
            Person p = _ds.GetById(applicantId);
            
            if (p == null) return NotFound();

            //return new JsonResult(p.Skills);
            return Ok(p.Skills);
        }
    }
}