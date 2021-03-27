using System.Collections.Generic;
using System.Linq;

namespace Members.Data
{
    public class InMemoryRepository : IRepository
    {
        private List<Member> Members;

        public InMemoryRepository()
        {
            Members = new List<Member>();
            Members.Add( new() {
                Id = 1,
                FirstName = "FN1",
                LastName = "LN1",
                MembershipNumber = 101
            });
            Members.Add( new() {
                Id = 2,
                FirstName = "FN2",
                LastName = "LN2",
                MembershipNumber = 102
            });
            Members.Add( new() {
                Id = 3,
                FirstName = "FN3",
                LastName = "LN3",
                MembershipNumber = 103
            });
        }
        
        public IEnumerable<Member> GetAll() => this.Members;

        public Member GetById(int id) => Members.Where(m => m.Id == id).FirstOrDefault();
    }
}