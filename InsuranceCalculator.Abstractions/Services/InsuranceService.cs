using System;
using System.Collections.Generic;
using System.Text;
using static InsuranceCalculator.Abstractions.Constants;

namespace InsuranceCalculator.Abstractions.Services
{
    public class InsuranceService : IInsuranceService
    {
        public InsuranceService()
        {

        }

        public decimal CalculatePremium(InsuranceModel insuranceModel)
        {
            var ratingFactor = OccupationRatings[insuranceModel.Occupation];
            return (insuranceModel.DeathCoverAmount * ratingFactor * insuranceModel.Age) / 1000 * 12;
        }
    }
}
