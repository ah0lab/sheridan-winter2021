using System;
using System.Collections.Generic;

namespace RazorPagesDemo.Models
{
    public interface IData
    {
        List<Actor> ActorsList {get;set;}
        List<Actor> ActorsInitializeData();
        Actor GetActorById (int? id);
    }
}