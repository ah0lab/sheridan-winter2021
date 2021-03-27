using System;
using System.ComponentModel;
using Banking;
using Xunit;
using Xunit.Abstractions;

namespace BA_A3_xUnitTests
{
    public class BankAccountTest
    {
        private readonly ITestOutputHelper _output;

        public BankAccountTest(ITestOutputHelper output)
        {
            _output = output;
        }
        
        [Fact]
        public void NameCheck()
        {
            // Arrange
            BankAccount account = new("Ben", "Ahola", 1000);
            string actualResult;
            string expectedResult = "Ben Ahola";
            
            // Act
            _output.WriteLine("Checking Name");
            actualResult = account.Name;

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Fact]
        [Trait("Category", "Transaction")]
        [Trait("Description", "Deposit Check Test")]
        public void DepositCheck()
        {
            // Arrange
            BankAccount account = new("Foo", "Bar", 500);
            double depositAmount = 50;

            double actualResult;
            double expectedResult = 500 + 50;

            // Act
            _output.WriteLine("Checking Deposit Operation");
            account.Deposit(depositAmount);
            actualResult = account.Balance;

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Fact]
        [Trait("Description", "Withdraw Check Test")]
        public void WithdrawCheck()
        {
            // Arrange
            BankAccount account = new ("Ben", "Ahola", 1000);
            double withdrawAmount = 100;
            double actualBalance;
            double expectedBalance = 1000 - withdrawAmount;

            // Act
            _output.WriteLine("Checking Withdrawl Operation");
            account.Withdraw(withdrawAmount);
            actualBalance = account.Balance;
            
            // Assert
            Assert.Equal(expectedBalance, actualBalance);
        }

        [Fact]
        public void DepositInvalidAmount_ThrowsException_Check()
        {
            // Arrange
            BankAccount account = new ("Ben", "Ahola", 100);
            double withdrawAmount = -100;

            // Assert
            Assert.Throws<InvalidAmountDepositException>(() =>
            {
                // Act
                account.Deposit(withdrawAmount);
            });
        }

        [Fact]
        public void WithdrawInvalidAmount_ThrowsException_Check()
        {
            // Arrange
            BankAccount account = new("Ben", "Ahola", 40);
            double withdrawAmount = -100;

            // Assert
            Assert.Throws<InvalidAmountWithdrawnException>(() =>
            {
                // Act
                account.Withdraw(withdrawAmount);
            });
        }

        [Theory]
        [InlineData(1000, 100, 900)] 
        [InlineData(1500, 150, 1350)]
        public void WithdrawCheckWithMultipleValues(double opening, double amount, double closing)
        {
            
            // Arrange
            BankAccount account = new("Ben", "Ahola", opening);
            double withdrawAmount = amount;
            double actualBalance;
            double expectedBalance = closing;
            
            // Act
            account.Withdraw(withdrawAmount);
            actualBalance = account.Balance;

            // Assert
            Assert.Equal(expectedBalance, actualBalance);
        }
        
    }
}