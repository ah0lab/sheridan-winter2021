using System;

namespace RazorPagesDemo.Models
{
    public class Actor
    {
        public int Id {get;set;}
        public string Firstname {get;set;}
        public string Lastname {get;set;}
        public string KnownFor {get;set;}
        public bool OscarWinner {get;set;}
        public string ImageName {get;set;}
    }
}