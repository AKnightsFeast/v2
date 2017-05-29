using System;

namespace v2.models.Enums
{
    [Flags]
    public enum SpiceType
    {
        Bland = 1,
        Mild = 2,
        Medium = 4,
        Hot = 16
    }
}