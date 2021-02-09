using System.Collections.Generic;

namespace CakeStoreAPI.Models
{
    public interface IData
    {
        List<Cake> CakesList { get; set; }
        List<Cake> CakesInitializedData();
        Cake GetCakeById(int? id);
    }
}