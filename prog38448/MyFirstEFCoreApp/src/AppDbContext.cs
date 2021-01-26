using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    private const string ConnectionString = 
        "Data Source=/home/gamb0l/doc/study/sheridan/winter2021/prog38448/MyFirstEFCoreApp/db/books.db;";

    protected override void OnConfiguring (
        DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite (ConnectionString);
    }

    public DbSet<Book> Books {get;set;}
}