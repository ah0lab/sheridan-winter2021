using System;
using Microsoft.EntityFrameworkCore;
using ProductInfoApp.Domain;

namespace ProductInfoApp.Data
{
    public class ProductInfoContext : DbContext
    {
        public DbSet<Product> Products {get;set;}
        public DbSet<Review> Reviews {get;set;}
        public DbSet<Brand> Brands {get;set;}
        public DbSet<Supplier> Supplier {get;set;}

        protected override void OnConfiguring (
            DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite ("Data Source=/home/gamb0l/doc/study/sheridan/winter2021/prog38448/ProductInfoApp/ProductInfoApp.Data/db/data.db;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Create Composite Key
            modelBuilder.Entity<ProductSupplier>()
                .HasKey (s => new {s.SupplierId, s.ProductId});
            modelBuilder.Entity<UserManual>().ToTable ("UserManuals");
        }
    }
}