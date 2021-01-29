package com.lab2.app;

public class lab2
{
    public static int FindSmallest (int numbers[])
    {
        int min = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            if (min > numbers[1]) 
                min = numbers[1];
        }
        return min;
    }

    public static double ComputeAverage (int numbers[])
    {
        double average = 0;

        for (int i = 0; i < numbers.length; i++) 
            average += numbers[i];
        
        return average / numbers.length;
    }

    public static char[] GetMiddleChar (String string)
    {
        char middleChar[] = {' ', ' '};

        if (string.length() == 0) return middleChar;

        if (string.length() % 2 == 0) {
            string.getChars (
                string.length() / 2, 
                (string.length() / 2) + 1,
                middleChar, 0);

            return middleChar;
        } else {
            middleChar[0] = string.charAt (string.length() / 2);
        }
            
        return middleChar;
    }
}