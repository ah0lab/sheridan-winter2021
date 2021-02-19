using Microsoft.AspNetCore.Mvc;
using System.Linq;

using BA_A2.Models;
using BA_A2.Data;

namespace BA_A2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentContext _context;

        public StudentsController(StudentContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("student/{id}", Name = "GetById")]
        public IActionResult GetStudent(int id)
        {
            Student s = _context.Students
                .FirstOrDefault(s => s.Id == id);

            if (s == null) return NotFound();

            return Ok(s);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult GetStudentList()
        {
            return Ok(_context.Students);
        }
        
        [HttpPost]
        public IActionResult CreateStudent([FromBody] Student s)
        {
            Student NewStudent = s;

            _context.Add(s);
            _context.SaveChanges();
            
            return Ok(NewStudent);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateStudent(int id, [FromBody] Student s)
        {
            if (id != s.Id) return BadRequest();
            
            Student queriedStudent = _context.Students
                .FirstOrDefault(s => s.Id == id);
            
            if (queriedStudent == null) return NotFound();

            _context.Update(s);
            _context.SaveChanges();
            
            return Ok(s);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            Student queriedStudent = _context.Students
                .FirstOrDefault(s => s.Id == id);

            if (queriedStudent == null) return NotFound();

            _context.Remove(queriedStudent);
            _context.SaveChanges();
            
            return NoContent();
        }
    }
}