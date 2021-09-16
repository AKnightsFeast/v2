export type YesNoKeyTypes = "true" | "false";
export const YesNoBoolTypes: Record<YesNoKeyTypes, string> = {
    true: "Yes",
    false: "No"
}

export type AssessmentPackagingKeyTypes = "Individual" | "FamilyStyle";
export const AssessmentPackagingTypes: Record<AssessmentPackagingKeyTypes, string> = {
    Individual: "Individual",
    FamilyStyle: "Family Style"
}

export type AssessmentContainerKeyTypes = "YourOwn" | "Plastic" | "Pyrex";
export const AssessmentContainerTypes: Record<AssessmentContainerKeyTypes, string> = {
    YourOwn: "Your own",
    Plastic: "Microwave safe plastic",
    Pyrex: "Freezer, oven, and microwave safe Pyrex"
}

export type AssessmentSpiceKeyTypes = "Bland" | "Mild" | "Medium" | "Hot";
export const AssessmentSpiceRanges: Record<AssessmentSpiceKeyTypes, string> = {
    Bland: "Bland",
    Mild: "Mild",
    Medium: "Medium",
    Hot: "Hot"
}

export type AssessmentBeefKeyTypes = "Rare" | "MediumRare" | "Medium" | "MediumWell" | "WellDone";
export const AssessmentBeefPrep: Record<AssessmentBeefKeyTypes, string> = {
    Rare: "Rare",
    MediumRare: "Medium Rare",
    Medium: "Medium",
    MediumWell: "Medium Well",
    WellDone: "Well Done"
}

export type AssessmentChickenKeyTypes = "DarkMeat" | "WhiteMeat" | "BoneIn" | "Boneless" | "WholeRoasts";
export const AssessmentChickenPrep: Record<AssessmentChickenKeyTypes, string> = {
    DarkMeat: "Dark Meat",
    WhiteMeat: "White Meat",
    BoneIn: "Bone In",
    Boneless: "Boneless",
    WholeRoasts: "Whole Roasts"
}

export type AssessmentPetLocationKeyTypes = "Inside" | "Outside";
export const AssessmentPetLocation: Record<AssessmentPetLocationKeyTypes, string> = {
    Inside: "Inside",
    Outside: "Outside"
}

export type KeyTypes = YesNoKeyTypes & AssessmentPackagingKeyTypes & AssessmentContainerKeyTypes & AssessmentSpiceKeyTypes &
                       AssessmentBeefKeyTypes & AssessmentChickenKeyTypes & AssessmentPetLocationKeyTypes;