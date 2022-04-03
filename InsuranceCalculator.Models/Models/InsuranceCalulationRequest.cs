using System;

namespace InsuranceCalculator.Models
{
    public class InsuranceCalulationRequestModel
    {
        public int Age { get; set; }
        public decimal InsuredAmount { get; set; }
        public Enum Occupation { get; set; }

    }
}
