using System;
using Members.Data;
using Members.MVC.Controllers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace BA_A3_xUnitTests_b
{
    public class HomeControllerTest
    {
        [Fact]
        public void Index_Returns_View()
        {
            // Arrange
            HomeController controller = new ();
            
            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.NotNull(result);
        }

        [Fact]
        public void Index_Returns_IndexView()
        {
            // Arrange
            HomeController controller = new ();
            string ExpectedViewName = "Index";

            // Act
            ViewResult result = controller.Index() as ViewResult;
            string ActualViewName = result.ViewName;

            // Assert
            Assert.Equal(ExpectedViewName, ActualViewName);
        }
    }
}