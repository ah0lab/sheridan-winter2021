using System.Collections.Generic;

namespace MVCBasicsWithEF.Models
{
    public class Member
    {
       public int Id { get; set; } 
       public string FirstName { get; set; }
       public string LastName { get; set; }
       
       //Virtual, will help in lazy loading
       public virtual ICollection<Game> Games { get; set; }
    }
}