using System;

namespace Banking
{
    public class BankAccount
    {
        private string _firstName;
        private string _lastName;

        private bool _frozen = false;

        private double _balance;

        public BankAccount(string fn, string ln, double b)
        {
            _firstName = fn;
            _lastName = ln;
            _balance = b;
        }

        public string Name
        {
            get => $"{_firstName} {_lastName}";
        }

        public double Balance
        {
            get => _balance;
        }

        public void Deposit(double amount)
        {
            if (amount <= 0)
                throw new InvalidAmountDepositException();
            
            _balance += amount;
        }

        public void Withdraw(double amount)
        {
            if (_frozen)
                throw new WithdrawFromFrozenAccountException();
            
            if (amount <= 0)
                throw new InvalidAmountWithdrawnException();
            
            _balance -= amount;
        }

        public void Freeze()
        {
            _frozen = true;
        }
    }
}