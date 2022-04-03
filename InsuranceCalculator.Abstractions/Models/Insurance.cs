using System;

namespace InsuranceCalculator.Abstractions
{
    public class InsuranceModel
    {
        public decimal DeathCoverAmount { get; set; }
        public Enums.Occupation Occupation { get; set; }
        public int Age { get; set; }
    }
}
