﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AKF.Database.Models
{
    [Table("Assessments", Schema = "lknight1")]
    public partial class Assessment
    {
        public Assessment()
        {
            People = new HashSet<Person>();
            Pets = new HashSet<Pet>();
        }

        [Key]
        public int AID { get; set; }
        [Required]
        [StringLength(100)]
        public string Address1 { get; set; }
        [StringLength(100)]
        public string Address2 { get; set; }
        [Required]
        [StringLength(100)]
        public string City { get; set; }
        [Required]
        [StringLength(2)]
        public string State { get; set; }
        [StringLength(5)]
        public string ZipCode { get; set; }
        [Required]
        [Column(TypeName = "ntext")]
        public string HiringGoal { get; set; }
        public string Allergies { get; set; }
        public bool LactoseInt { get; set; }
        public string Medical { get; set; }
        public string DietPlan { get; set; }
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
        [Column(TypeName = "ntext")]
        public string Comments { get; set; }
        public bool Turkey { get; set; }
        public bool Lamb { get; set; }
        public bool Pork { get; set; }
        public bool Seafood { get; set; }
        public string SeafoodNots { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal BeefPrep { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal ChickenPrep { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal SpiceLikes { get; set; }
        public short Container { get; set; }
        public short PackageStyle { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreationDate { get; set; }

        [ForeignKey(nameof(State))]
        [InverseProperty("Assessments")]
        public virtual State StateNavigation { get; set; }
        [InverseProperty(nameof(Person.AIDNavigation))]
        public virtual ICollection<Person> People { get; set; }
        [InverseProperty(nameof(Pet.AIDNavigation))]
        public virtual ICollection<Pet> Pets { get; set; }
    }
}
