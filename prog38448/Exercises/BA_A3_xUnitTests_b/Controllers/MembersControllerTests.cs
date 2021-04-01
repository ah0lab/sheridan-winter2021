using System;
using System.Net;
using Members.Data;
using Members.MVC.Controllers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace BA_A3_xUnitTests_b
{
    public class MembersControllerTests
    {
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
            MembersController controller = new(mock.Object);
            Type ExpectedModelType = typeof(Member);
            int ExpectedMembershipNumber = 101;
            
            // Act
            ViewResult result = controller.Details(1) as ViewResult;
            Type ActualModelType = result.Model.GetType();
            int ActualMembershipNumber = (result.Model as Member).MembershipNumber;
            
            // Assert
            Assert.IsType(ExpectedModelType, result.Model);
            Assert.Equal(ExpectedMembershipNumber, ActualMembershipNumber);
        }

        [Fact]
        public void Details_NullId_BadHttp()
        {
            // Arrange
            var mock = new Mock<IRepository>();
            mock.Setup(repo => repo);
            var controller = new MembersController(mock.Object);
            int ExpectedStatusCode = (int) HttpStatusCode.BadRequest;

            // Act
            BadRequestResult result = controller.Details(null) as BadRequestResult;
            int ActualStatusCode = result.StatusCode;
            
            // Assert
            Assert.Equal(ExpectedStatusCode, ActualStatusCode);
        }

        [Fact]
        public void Details_NullId_NotFoundHTTP()
        {
            // Arrange
            var mock = new Mock<IRepository>();
            mock.Setup(repo => repo.GetById(1)).Returns(null as Member);
            MembersController controller = new(mock.Object);
            int ExpectedStatusCode = (int) HttpStatusCode.NotFound;

            // Act
            NotFoundResult result = controller.Details(1) as NotFoundResult;
            int ActualStatusCode = result.StatusCode;

            // Assert
            Assert.Equal(ExpectedStatusCode, ActualStatusCode);

        }
        
    }
}