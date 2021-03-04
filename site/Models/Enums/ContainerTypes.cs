using System;
using System.Text.Json.Serialization;

using Newtonsoft.Json.Converters;

using site.Attributes;

namespace site.Models.Enums
{
    [Flags]
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ContainerType : short
    {
        [EnumDisplay(Label = "Microwave safe plastic")] Plastic = 1,
        [EnumDisplay(Label = "Freezer, oven, and microwafe safe Pyrex")] Pyrex = 2,
        [EnumDisplay(Label = "Theirs")] Own = 4
    }
}