using Microsoft.EntityFrameworkCore;

using BA_A2.Models;

namespace BA_A2.Data
{
    public class StudentContext : DbContext
    {
        public StudentContext(DbContextOptions<StudentContext> options)
            :base(options) { }
        
        public DbSet<Student> Students { get; set; }
    }
}