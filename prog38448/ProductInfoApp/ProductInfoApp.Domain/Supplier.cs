using System;
using System.Collections.Generic;

namespace ProductInfoApp.Domain
{
    public class Supplier
    {
        public int Id {get;set;}
        public string Name {get;set;}
        public List<ProductSupplier> ProductSuppliers {get;set;}

        public Supplier () 
        {
            ProductSuppliers = new List<ProductSupplier>();
        }
    }
}