using System;
using System.ComponentModel.DataAnnotations;

public class Author 
{
    [Key]
    public int Author_Id {get;set;}
    public string Name {get;set;}
    public string WebURL {get;set;}
}