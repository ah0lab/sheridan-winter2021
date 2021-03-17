using System;
using System.Reflection;
using NUnit.Framework;

namespace BankingTest
{
    public class TestBase
    {
        public TestContext TestContext { get; set; }

        protected void WriteDescription(Type t)
        {
            MemberInfo method = t.GetMethod(TestContext.Test.Name);
            var attrib = method.GetCustomAttribute(typeof(DescriptionAttribute));

            var descAttrib = (DescriptionAttribute) attrib;
            TestContext.WriteLine("Description " + descAttrib);

        }
    }
}