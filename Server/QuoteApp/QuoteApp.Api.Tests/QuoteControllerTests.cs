using System.Linq;
using System.Threading.Tasks;
using QuotationApp.Api.Controllers;
using Xunit;


namespace QuoteApp.Api.Tests
{
    public class QuoteControllerTests
    {
        [Fact]
        public async Task GetShouldRetrunFiveQuotes()
        {
            var controller = new QuotationController();

            var result = await controller.Get();

            var actual = result.Count();

            var expected = 5;

            Assert.Equal(expected, actual);
        }
    }
}
