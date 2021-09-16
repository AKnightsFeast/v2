using System;

namespace site.Models.Enums
{
    [Flags]
    public enum PackageType : short
    {
        Individual = 1,
        FamilyStyle = 2
    }
}