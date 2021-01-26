using System;

namespace ProductInfoApp.Domain
{
    public class ProductSupplier
    {
        public int ProductId {get;set;}
        public int SupplierId {get;set;}
        public Product Product {get;set;}
        public Supplier Supplier {get;set;}
    }
}