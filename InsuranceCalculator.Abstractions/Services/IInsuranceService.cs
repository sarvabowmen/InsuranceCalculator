using System;
using System.Collections.Generic;
using System.Text;

namespace InsuranceCalculator.Abstractions.Services
{
    public interface IInsuranceService
    {
        public decimal CalculatePremium(InsuranceModel insuranceModel);
    }
}
