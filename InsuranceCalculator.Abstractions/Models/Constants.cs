using System;
using System.Collections.Generic;
using System.Text;

namespace InsuranceCalculator.Abstractions
{
    class Constants
    {
        public static Dictionary<Enums.Occupation, decimal> OccupationRatings = new Dictionary<Enums.Occupation, decimal>
        {
            { Enums.Occupation.Author, 1.25m },
            { Enums.Occupation.Cleaner, 1.5m },
            { Enums.Occupation.Doctor, 1m },
            { Enums.Occupation.Farmer, 1.75m },
            { Enums.Occupation.Mechanic, 1.75m },
            { Enums.Occupation.Florist, 1.5m },
        };
    }
}
