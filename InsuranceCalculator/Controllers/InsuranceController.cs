using InsuranceCalculator.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime;
using InsuranceCalculator.Abstractions.Services;

namespace InsuranceCalculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsuranceController : ControllerBase
    {
        private IInsuranceService _insuranceService;
        public InsuranceController(IInsuranceService insuranceService)
        {
            _insuranceService = insuranceService;
        }
        [HttpPost]
        public async Task<IActionResult> Post(InsuranceCalulationRequestModel req)
        {
            var insuranceModel = req.ToInsuranceModel();
            var premium = _insuranceService.CalculatePremium(insuranceModel);
            return Ok(premium);
        }
    }
}
