using System;

namespace site.Models.Enums
{
    [Flags]
    public enum ContainerType : short
    {
        Plastic = 1,
        Pyrex = 2,
        YourOwn = 4
    }
}