using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using Microsoft.AspNetCore.Mvc;

using site.Models.Enums;
using site.Models.Binders;

namespace site.Models
{
    [Serializable]
    [Table("Assessments", Schema = "lknight1")]
    public class Assessment
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AID { get; private set; }

        [Required] public string HiringGoal { get; set; }

        public string Allergies { get; set; }
        public bool LactoseInt { get; set; }
        public string Medical { get; set; }
        public string DietPlan { get; set; }

        public BeefPrepType BeefPrep { get; set; }
        [NotMapped] public bool Beef { get { return (BeefPrep & BeefPrepType.Any) != 0; } }

        public ChickenPrepType ChickenPrep { get; set; }
        [NotMapped] public bool Chicken { get { return (ChickenPrep & ChickenPrepType.Any) != 0; } }

        public bool Turkey { get; set; }
        public bool Lamb { get; set; }
        public bool Pork { get; set; }
        public bool Seafood { get; set; }
        public string SeafoodNots { get; set; }

        public string OtherMeats { get; set; }
        public bool VegMeals { get; set; }
        public string FavFHV { get; set; }
        public string UnfavFHV { get; set; }
        public string FavGreens { get; set; }
        public string EquipNots { get; set; }
        public string Recipes { get; set; }
        public string Restaurants { get; set; }
        public bool AddlFridge { get; set; }
        public string Grocers { get; set; }
        public string FuseboxLocale { get; set; }
        public string Comments { get; set; }
        public DateTime CreationDate { get; private set; }

        public Address CookingAddress { get; set; }

        [ModelBinder(BinderType = typeof(EnumPropertyBinder))]
        public SpiceType SpiceLikes { get; set; }

        [ModelBinder(BinderType = typeof(EnumPropertyBinder))]
        public ContainerType Container { get; set; }

        [ModelBinder(BinderType = typeof(EnumPropertyBinder))]
        public PackageType PackageStyle { get; set; }

        [InverseProperty("Assessment")] public virtual ICollection<Person> People { get; set; }
        [InverseProperty("Assessment")] public virtual ICollection<Pet> Pets { get; set; }

        public Assessment()
        {
            CreationDate = DateTime.Now;
            CookingAddress = new Address();
        }
    }
}