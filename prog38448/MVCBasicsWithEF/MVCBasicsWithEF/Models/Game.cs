using System.Collections.Generic;

namespace MVCBasicsWithEF.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        
        public virtual ICollection<Member> Members { get; set; }
    }
}