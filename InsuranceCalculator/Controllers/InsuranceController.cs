using InsuranceCalculator.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime;

namespace InsuranceCalculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsuranceController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Post(InsuranceCalulationRequestModel req)
        {
            return Ok();
        }
    }
}
