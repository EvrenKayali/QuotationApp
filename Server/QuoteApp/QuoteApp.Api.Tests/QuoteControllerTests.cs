using System;
using System.Linq;
using Microsoft.Extensions.Logging.Abstractions;
using QuotationApp.Api.Controllers;
using Xunit;

namespace QuoteApp.Api.Tests
{
    public class QuoteControllerTests
    {
        [Fact]
        public void GetShouldRetrunFiveQuotes()
        {
            var controller = new QuotationController(new NullLogger<QuotationController>());

            var actual = controller.Get().Count();

            var expected = 5;

            Assert.Equal(expected, actual);
        }
    }
}
