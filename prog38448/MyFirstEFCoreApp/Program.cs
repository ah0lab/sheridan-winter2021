using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace MyFirstEFCoreApp
{
    class Program
    {
        static void Main(string[] args)
        {
            ListAll();
            UpdateWebURL();
        }

        public static void UpdateWebURL()
        {
            Console.WriteLine ("New URL for foo > ");
            Console.ReadLine();

            using (var db = new AppDbContext()) {
                var book = db.Books
                    .Include (a => a.Author)
                    .Single (b => b.Title == "A bar for a foo");

            }
        }

        public static void ListAll ()
        {
            using (var db = new AppDbContext()) {
                foreach (var book in 
                    db.Books.AsNoTracking()
                    .Include(a => a.Author))
                {
                    var webUrl = book.Author.WebURL == null
                        ? "- no web URL given -"
                        : book.Author.WebURL;
                    
                    Console.WriteLine (
                        $"{book.Title} by {book.Author.Name}");
                    Console.WriteLine ("    URL" + $"{webUrl}");
                }
            }
        }
    }
}
