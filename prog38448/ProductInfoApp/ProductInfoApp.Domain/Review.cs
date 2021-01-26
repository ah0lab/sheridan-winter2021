using System;

namespace ProductInfoApp.Domain
{
    public class Review
    {
        public int Id {get;set;}
        public string ReviewText {get;set;}
        public int ProductId {get;set;}
        public Product Product {get;set;}
        public Review () {}
    }
}