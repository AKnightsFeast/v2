using System;
using System.Runtime.Serialization;

namespace site.Models.Enums
{
    [Flags]
    public enum BeefPrepType
    {
        Rare = 1,
        [EnumMember(Value = "MediumRare")]
        MedRare = 2,
        Medium = 4,
        [EnumMember(Value = "MediumWell")]
        MedWell = 16,
        [EnumMember(Value = "WellDone")]
        WellDone = 32,
        [EnumMember(Value = "Any")]
        Any = Rare | MedRare | Medium | MedWell | WellDone,
        [EnumMember(Value = "All")]
        All = Rare & MedRare & Medium & MedWell & WellDone
    }
}