using System;
using System.Net;
using Xunit;
using Moq;

using ManagerMVC.Controllers;
using ManagerMVC.Models;
using Microsoft.AspNetCore.Mvc;

namespace ManagerMVCTest
{
    public class UnitTest1
    {
        [Fact]
        public void Details_Returns_BadRequest()
        {
            //Arrange
            var mock = new Mock<IManagerRepo>();
            mock.Setup(repo => repo);
            var controller = new DetailsAc_Returns_Bad_ReRequestManagersController(mock.Object);
            int ExpectedStatusCode = (int) HttpStatusCode.BadRequest;

            //Act
            BadRequestResult result = controller.Details(null) as BadRequestResult;
            int ActualStatusCode = result.StatusCode;
            
            //Assert
            Assert.Equal(ExpectedStatusCode, ActualStatusCode);
        }

        [Fact]
        public void Details_Returns_ActionResult()
        {
            // Arrange
            var mock = new Mock<IManagerRepo>();
            mock.Setup(repo => repo.GetById(5)).Returns(new Manager
            {
                Id = 5,
                FirstName = "Ben",
                LastName = "Ahola"
            });
            var controller = new DetailsAc_Returns_Bad_ReRequestManagersController(mock.Object);
            Type ExpectedModelType = typeof(Manager);
            int ExpectedManagerId = 5;
            
            // Act
            ViewResult result = controller.Details(5) as ViewResult;
            Type ActualModelType = result.Model.GetType();
            int ActualManagerId = (result.Model as Manager).Id;
            
            // Assert
            Assert.IsType(ExpectedModelType, result.Model);
            Assert.Equal(ExpectedManagerId, ActualManagerId);
        }
    }
}