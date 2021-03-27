using System.Collections;
using System.Collections.Generic;

namespace Members.Data
{
    public interface IRepository
    {
        public IEnumerable<Member> GetAll();
        public Member GetById(int id);
    }
}