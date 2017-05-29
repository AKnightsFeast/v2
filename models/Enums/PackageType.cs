using System;

using v2.models.Attributes;

namespace v2.models.Enums
{
    [Flags]
    public enum PackageType : short
    {
        Individual = 1,
        [EnumDisplay(Label = "Family Style")] Family = 2
    }
}