using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using NUnit.Framework;
using Banking;

namespace BankingTest
{
    public class BankAccountTests : TestBase
    {
        private const string FIRST_NAME = "Ben";
        private const string LAST_NAME = "Ahola";
        private const double INITIAL_BALANCE = 1000;


        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void NameCheck()
        {
            // Arrange
            BankAccount ba = new(FIRST_NAME, LAST_NAME, INITIAL_BALANCE);
            string resultFromCall;
            string expectedResult = FIRST_NAME + " " + LAST_NAME;

            // Act
            TestContext.WriteLine("Checking Name");
            resultFromCall = ba.Name;

            // Assert
            Assert.AreEqual(expectedResult, resultFromCall);
        }

        [Test]
        [Author("Ben")]
        //[Priority()]
        [NUnit.Framework.Category("Tansaction")]
        [NUnit.Framework.Description("Deposit Check Test")]
        public void DepositCheck()
        {
            // Arrange
            BankAccount ba = new(FIRST_NAME, LAST_NAME, INITIAL_BALANCE);
            double depositAmount = 55;

            double resultFromCall;
            double expectedResult = INITIAL_BALANCE + depositAmount;

            // Act
            TestContext.WriteLine("Checking Deposit operation");
            ba.Deposit(depositAmount);
            resultFromCall = ba.Balance;

            // Assert
            Assert.AreEqual(expectedResult, resultFromCall);
        }

        [Test]
        [NUnit.Framework.Description("Withdraw Cheque Test")]
        public void WithdrawCheck()
        {
            // Arrange
            BankAccount ba = new(FIRST_NAME, LAST_NAME, INITIAL_BALANCE);
            double withdrawlAmount = 150;
            double resultFromCall;
            double expectedResult = INITIAL_BALANCE - withdrawlAmount;

            // Act
            TestContext.WriteLine("Checking Withdrawl operation");
            ba.Withdraw(withdrawlAmount);
            resultFromCall = ba.Balance;
            // Assert
            Assert.AreEqual(expectedResult, resultFromCall);
        }

        [Test]
        public void DepositInvalidAmount_ThrowsException_Check()
        {
            // Arrange
            BankAccount ba = new(FIRST_NAME, LAST_NAME, INITIAL_BALANCE);
            double depositAmount = -100;

            // Assert
            Assert.Throws<InvalidAmountDepositException>(() =>
            {
                // Act
                ba.Deposit(depositAmount);
            });
        }

        [Test]
        public void WithdrawInvalidAmount_ThrowsException_Check()
        {
            // Arrange
            BankAccount ba = new(FIRST_NAME, LAST_NAME, INITIAL_BALANCE);
            double withdrawlAmount = -100;
            
            // Assert
            Assert.Throws<InvalidAmountWithdrawnException>(() =>
            {
                // Act
                ba.Withdraw(withdrawlAmount);
            });

        }

        [Test]
        [TestCase(1000, 100, 900), DisplayName("Test 1 (1000-100=900)")]
        [TestCase(1500, 150, 1350)] 
        public void WithdrawCheckWithMultipleValues(double opening, double amount, double closing)
        {
            // Arrange
            BankAccount ba = new(FIRST_NAME, LAST_NAME, opening);
            double withdrawAmount = amount;
            double resultFromCall;
            double expectedResult = closing;
            
            // Act
            ba.Withdraw(withdrawAmount);
            resultFromCall = ba.Balance;
            
            // Assert
            Assert.AreEqual(expectedResult, resultFromCall);
        }

    }

}
