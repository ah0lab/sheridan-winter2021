package com.lab2p5.app;

import static org.junit.Assert.*;

import org.junit.Test;

import com.lab2p5.app.Time;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue()
    {
        assertTrue( true );
    }

    @Test(expected = AssertionError.class)
    public void ExceptionCase()
    {
        assertTrue ("Exception case failed", (128780 ==
            Time.getTotalSeconds("34:45:80")));
    }

    @Test(expected = AssertionError.class)
    public void BoundryOutCase()
    {
        assertTrue ("Boundry-out case failed", (93660 ==
            Time.getTotalSeconds("25:60:60")));
    }

    @Test
    public void BoundryInCase()
    {
        assertEquals ("Boundry-in case passed", 89999, 
            Time.getTotalSeconds("24:59:59"));
    }

    @Test
    public void RegularCase()
    {
        assertEquals ("Regular case passed", 48296, 
            Time.getTotalSeconds ("13:24:56"));
    }

}
