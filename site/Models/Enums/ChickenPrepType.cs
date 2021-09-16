using System;
using System.Runtime.Serialization;

namespace site.Models.Enums
{
    [Flags]
    public enum ChickenPrepType
    {
        [EnumMember(Value = "DarkMeat")]
        DarkMeat = 1,
        [EnumMember(Value = "WhiteMeat")]
        WhiteMeat = 2,
        [EnumMember(Value = "BoneIn")]
        BoneIn = 4,
        Boneless = 16,
        [EnumMember(Value = "WholeRoasts")]
        WholeRoasts = 32,
        [EnumMember(Value = "Any")]
        Any = DarkMeat | WhiteMeat | BoneIn | Boneless | WholeRoasts,
        [EnumMember(Value = "All")]
        All = DarkMeat & WhiteMeat & BoneIn & Boneless & WholeRoasts
    }
}