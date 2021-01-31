package com.lab2p6.app;

import static org.junit.Assert.assertTrue;
import org.junit.*;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{

    @Before
    public void setup() 
    {
        SmartPhone sp = new SmartPhone ("Test", 99.99, 3.0);
    }

    //########################
    // getFormattedPrice Tests
    //########################
    @Test
    public void BoundryOut_getFormattedPrice()
    {
        SmartPhone sp = new SmartPhone ("BadPrice", 0.100, 1.0);
        assertTrue ("Boundry test case failed", sp.getFormattedPrice().equals ("$0.100"));
    }

    @Test
    public void BoundryIn_getFormattedPrice()
    {
        Smart//########################
        // getFormattedPrice Tests
        //########################
        @Test
        public void BoundryOu
    public void Regular_getFormattedPrice()
    {
        SmartPhone sp = new SmartPhone ("GreatPrice", 100.99, 1.0);
        assertTrue ("Regular test case failed", sp.getFormattedPrice().equals ("$100.99"));
    }

    //########################
    // getFormattedPrice Tests
    //########################
    @Test(expected = VersionNumberException.class)
    public void BoundryOut_setVersion()throws VersionNumberException 
    {
        SmartPhone sp = new SmartPhone ("Test", 99.99, 3.0);
        sp.setVersion (sp.getVersion() + 1.01);
    }
    @Test
    public void BoundryIn_setVersion()throws VersionNumberException 
    {
        SmartPhone sp = new SmartPhone ("Test", 99.99, 3.0);
        sp.setVersion (sp.getVersion() + 1.0);
        assertTrue ("Version number not set properly", (4.0 == sp.getVersion()));
    }

    @Test(expected = VersionNumberException.class)
    public void Exception_setVersion()throws VersionNumberException 
    {
        SmartPhone sp = new SmartPhone ("Test", 99.99, 3.0);
        sp.setVersion (9.0);
    }

    @Test
    public void Regular_setVersion()throws VersionNumberException 
    {
        SmartPhone sp = new SmartPhone ("Test", 99.99, 3.0);
        sp.setVersion (2.0);
        assertTrue ("Version number not set properly", (2.0 == sp.getVersion()));
    }
}
