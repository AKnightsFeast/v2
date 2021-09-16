using System;
using System.Runtime.Serialization;

namespace site.Models.Enums
{
    [Flags]
    public enum BeefPrepType
    {
        Rare = 1,
        [EnumMember(Value = "MediumRare")]
        MediumRare = 2,
        Medium = 4,
        [EnumMember(Value = "MediumWell")]
        MediumWell = 16,
        [EnumMember(Value = "WellDone")]
        WellDone = 32,
        [EnumMember(Value = "Any")]
        Any = Rare | MediumRare | Medium | MediumWell | WellDone,
        [EnumMember(Value = "All")]
        All = Rare & MediumRare & Medium & MediumWell & WellDone
    }
}