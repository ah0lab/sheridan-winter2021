using ProductInfoApp.Data;
using ProductInfoApp.Domain;
using System;
using System.Linq;

namespace ProductInfoApp.Frontend
{
    class Program
    {
        private static ProductInfoContext context = 
            new ProductInfoContext();
        static void Main(string[] args)
        {
            //context.Database.EnsureCreated ();

            // AddProduct ();
            AddData ();
            GetProducts ();
            GetSuppliers ();

            Console.Write ("Press any key to continue...");
            Console.ReadKey ();
        }

        public static void AddData ()
        {
            Product p2 = new Product {Name = "Product 2"};
            var p3 = new Product {Name = "Product 3"};

            context.Products.Add (p2);
            context.Products.Add (p3);

            Product p4 = new Product {Name = "Product 4"};
            Supplier s2 = new Supplier {Name = "Supplier 2"};

            context.AddRange (p4, s2);

            context.SaveChanges();
        }

        public static void GetSuppliers ()
        {
            var suppliers = context.Supplier.ToList ();
            System.Console.WriteLine ($"Supplier Count is {suppliers.Count}");

            foreach (Supplier s in suppliers) {
                System.Console.WriteLine(s.Name);
            }

        }

        public static void AddProduct ()
        {
            Product p = new Product {Name = "Product 1"};
            context.Products.Add (p);
            context.SaveChanges ();
        }

        public static void GetProducts ()
        {
            var products = context.Products.ToList ();

            Console.WriteLine ($"Product Count is {products.Count}");
            foreach (Product p in products) {
                Console.WriteLine (p.Name);
            }
        }
    }
}
