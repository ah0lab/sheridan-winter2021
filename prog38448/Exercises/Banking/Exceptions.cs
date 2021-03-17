using System;
using System.Security.Cryptography;

namespace Banking
{
    
    public class InvalidAmountWithdrawnException: Exception
    {
        public InvalidAmountWithdrawnException():
            base("Invalid Amount") { }
    }

    public class WithdrawFromFrozenAccountException: Exception
    {
        public WithdrawFromFrozenAccountException(): 
            base("Cannot withdraw from frozen account") { }
    }
    
    public class InvalidAmountDepositException: Exception
    {
        public InvalidAmountDepositException():
            base("Invalid Amount") { }
    }
}