package com.lab2.app;

import java.util.*;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        Scanner sc = new Scanner (System.in);
        int[] numbers = new int[3];

        System.out.print ("Enter three numbers :");
        for (int i = 0; i < 3; i++) 
            numbers[i] = sc.nextInt();

        System.out.println ("The smallest Value is " + 
            lab2.FindSmallest(numbers));
        
        System.out.print ("Enter three different numbers :");
        for (int i = 0; i < 3; i++)
            numbers[i] = sc.nextInt();
        
        System.out.println ("The average of those three numbers is " +
            lab2.ComputeAverage(numbers));

        sc.nextLine();
        System.out.print ("Enter a string: ");
        String str = sc.nextLine();
        
        System.out.println ("The middle character" + 
            ((str.length() % 2 == 0) ? "s are" : " is: ") +
            lab2.GetMiddleChar(str));
        
        sc.close();
    }
}
