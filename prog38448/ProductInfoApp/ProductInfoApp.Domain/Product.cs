using System;
using System.Collections.Generic;

namespace ProductInfoApp.Domain
{
    public class Product
    {
        public int Id {get;set;}
        public string Name {get;set;}
        public List<Review> Reviews {get;set;}
        public Brand Brand {get;set;}
        public List<ProductSupplier> ProductSuppliers {get;set;}
        public UserManual UserManual {get;set;}
        public Product() 
        {
            Reviews = new List<Review>();
            ProductSuppliers = new List<ProductSupplier>();
        }
    }
}