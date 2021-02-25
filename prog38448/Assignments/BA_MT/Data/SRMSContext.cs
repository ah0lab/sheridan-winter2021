using Microsoft.EntityFrameworkCore;
using BA_MT.Models;

namespace BA_MT.Data
{
    public class SRMSContext : DbContext
    {
        public SRMSContext (DbContextOptions<SRMSContext> opts): base(opts) { }
        
        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
    }
}