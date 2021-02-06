using Microsoft.EntityFrameworkCore;

using BA_A1.Models;

namespace BA_A1.Data
{
    public class StudentContext : DbContext
    {
        public StudentContext (DbContextOptions<StudentContext> options):
            base(options) { }
        
        public DbSet<Student> Students { get; set; }
    }
}