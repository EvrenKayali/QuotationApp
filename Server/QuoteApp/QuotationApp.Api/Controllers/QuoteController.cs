using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using QuotationApp.Api.Models;
using System.Threading.Tasks;

namespace QuotationApp.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuotationController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<QuotationModel>> Get()
        {
            await Task.Delay(5000);
            return new List<QuotationModel>
            {
                new QuotationModel
                {
                    Text = "I do not fear computers. I fear lack of them.",
                    Owner = "Isaac Asimov",

                },
                new QuotationModel
                {
                    Text="A computer once beat me at chess, but it was no match for me at kick boxing",
                    Owner="Emo Philips"
                },
                 new QuotationModel
                {
                    Text="Computer Science is no more about computers than astronomy is about telescopes.",
                    Owner="Edsger W. Dijkstra"
                },
                  new QuotationModel
                {
                    Text="The computer was born to solve problems that did not exist before.",
                    Owner="Bill Gates"
                },
                   new QuotationModel
                {
                    Text="Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.",
                    Owner="Norman Augustine"
                },
            };
        }
    }
}
