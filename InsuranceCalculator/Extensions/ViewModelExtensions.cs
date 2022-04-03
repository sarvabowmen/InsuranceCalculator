using InsuranceCalculator.Abstractions;
using InsuranceCalculator.Models;

namespace InsuranceCalculator
{
    public static class ViewModelExtensions
    {
        public static InsuranceModel ToInsuranceModel(this InsuranceCalulationRequestModel insuranceRequestModel)
        {
            var insuranceModel = new InsuranceModel
            {
                Age = insuranceRequestModel.Age,
                DeathCoverAmount = insuranceRequestModel.SumAssured,
                Occupation = insuranceRequestModel.Occupation,
            };

            return insuranceModel;
        }
    }
}
