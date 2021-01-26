using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System;

public class Book
{
    [Key]
    public int Book_id {get;set;}
    public string Title {get;set;}

    public int Author_id {get;set;}
    public Author Author {get;set;}
}