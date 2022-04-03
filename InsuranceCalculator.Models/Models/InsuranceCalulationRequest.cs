using InsuranceCalculator.Abstractions;

namespace InsuranceCalculator.Models
{
    public class InsuranceCalulationRequestModel
    {
        public int Age { get; set; }
        public decimal InsuredAmount { get; set; }
        public Enums.Occupation Occupation { get; set; }

    }
}
