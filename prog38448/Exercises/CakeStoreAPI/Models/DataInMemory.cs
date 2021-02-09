using System.Collections.Generic;
using System.Linq;

namespace CakeStoreAPI.Models
{
    public class DataInMemory : IData
    {
        public List<Cake> CakesList { get; set; }
        
        public List<Cake> CakesInitializedData()
        {
            CakesList = new List<Cake>()
            {
                new Cake() {Id = 101, CakeType = "VanillaCake", Quantity = 5},
                new Cake() {Id = 102, CakeType = "StrawberryCake", Quantity = 7},
                new Cake() {Id = 103, CakeType = "BananaCake", Quantity = 4},
                new Cake() {Id = 104, CakeType = "ChocolateCake", Quantity = 5}
            };

            return CakesList;
        }

        public Cake GetCakeById(int? id)
        {
            if (id == null) return null;

            return CakesList.SingleOrDefault(c => c.Id == id);
        }
    }
}