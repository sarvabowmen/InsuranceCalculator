using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace InsuranceCalculator.Abstractions
{
    public class Enums
    {
        [JsonConverter(typeof(System.Text.Json.Serialization.JsonStringEnumConverter))]
        public enum Occupation
        {
            Cleaner,
            Doctor,
            Author,
            Farmer,
            Mechanic,
            Florist
        }
    }
}
