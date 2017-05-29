using System;

using v2.models.Attributes;

namespace v2.models.Enums
{
    [Flags]
    public enum BeefPrepType
    {
        Rare = 1,
        [EnumDisplay(Label = "Medium Rare")]
        MedRare = 2,
        Medium = 4,
        [EnumDisplay(Label = "Medium Well")]
        MedWell = 16,
        [EnumDisplay(Label = "Well Done")]
        WellDone = 32,
        [EnumDisplay(IsVisible = false)]
        Any = Rare | MedRare | Medium | MedWell | WellDone,
        [EnumDisplay(IsVisible = false)]
        All = Rare & MedRare & Medium & MedWell & WellDone
    }
}