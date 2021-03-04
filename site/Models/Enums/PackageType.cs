using System;
using System.Text.Json.Serialization;

using Newtonsoft.Json.Converters;

using site.Attributes;

namespace site.Models.Enums
{
    [Flags]
    [JsonConverter(typeof(StringEnumConverter))]
    public enum PackageType : short
    {
        Individual = 1,
        [EnumDisplay(Label = "Family Style")] FamilyStyle = 2
    }
}