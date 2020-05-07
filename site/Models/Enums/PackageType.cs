using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using site.Attributes;

namespace site.Models.Enums
{
    [Flags]
    public enum PackageType : short
    {
        Individual = 1,
        [EnumDisplay(Label = "Family Style")] Family = 2
    }
}