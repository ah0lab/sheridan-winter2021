using System;
using Members.Data;
using Members.MVC.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace Members.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTests
    {
        [TestMethod]
        public void Index_Returns_View()
        {
            // Arrange
            HomeController controller = new HomeController();
            
            // Act
            ViewResult result = controller.Index() as ViewResult;
            
            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void Index_Returns_IndexView()
        {
            // Arrange
            HomeController controller = new();
            string ExpectedViewName = "Index";
            
            // Act
            ViewResult result = controller.Index() as ViewResult;
            string ActualViewName = result.ViewName;
            
            // Assert
            Assert.AreEqual(ExpectedViewName, ActualViewName);
        }

        [TestMethod]
        public void Details_Returns_MemberModel()
        {
            // Arrange
            var mock = new Mock<IRepository>();
            mock.Setup(repo => repo.GetById(1)).Returns(new Member
            {
                Id = 1,
                FirstName = "Ben",
                LastName = "Ahola",
                MembershipNumber = 101
            });
            MembersController mc = new(mock.Object);
            Type ExpectedModelType = typeof(Member);
            int ExpectedMembershipNumber = 101;
            
            // Act
            ViewResult result = mc.Details(1) as ViewResult;
            Type ActualModelType = result.Model.GetType();
            int ActualMembershipNumber = (result.Model as Member).MembershipNumber;
            
            // Assert
            Assert.IsInstanceOfType(result.Model, ExpectedModelType);
            Assert.AreEqual(ExpectedMembershipNumber, ActualMembershipNumber);
        }
    }
}