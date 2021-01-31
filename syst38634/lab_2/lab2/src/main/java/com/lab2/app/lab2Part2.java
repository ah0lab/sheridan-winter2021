package com.lab2.app;

public abstract class lab2Part2
{
    public static int CountVowels (String str)
    {
        int count = 0;
        char[] strChars = str.toLowerCase().toCharArray();

        for (int i = 0; i < str.length(); i++)
            switch (strChars[i]) {
                case 'a'|'e'|'i'|'o'|'u'|'y': count++; break;
            }

        return count;
    }

    public static char GetCharAt (String str, int index)
    {
        char[] strChars = str.toCharArray();
        
        if (index < 0) return ' ';
        if (index >= strChars.length) return ' ';

        return strChars[index];
    }
}