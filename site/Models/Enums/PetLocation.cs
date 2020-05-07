using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace site.Models.Enums
{
    [Flags]
    public enum PetLocation
    {
        Inside = 1,
        Outside = 2
    }
}