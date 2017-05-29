using System;

using v2.models.Attributes;

namespace v2.models.Enums
{
    [Flags]
    public enum ContainerType : short
    {
        [EnumDisplay(Label = "Microwave safe plastic")] Plastic = 1,
        [EnumDisplay(Label = "Freezer, oven, and microwafe safe Pyrex")] Pyrex = 2,
        [EnumDisplay(Label = "Theirs")] Own = 4
    }
}