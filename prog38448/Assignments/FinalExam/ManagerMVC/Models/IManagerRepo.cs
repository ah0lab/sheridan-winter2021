using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagerMVC.Models
{
    public interface IManagerRepo
    {
        public Manager GetById(int id);
    }
}
