using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AKF.Database.Models
{
    [Table("Pets", Schema = "lknight1")]
    public partial class Pet
    {
        [Key]
        public int ID { get; set; }
        public int AID { get; set; }
        [Required]
        [StringLength(30)]
        public string Name { get; set; }
        [Required]
        [StringLength(50)]
        public string Breed { get; set; }
        public bool IsFriendly { get; set; }
        public byte Location { get; set; }

        [ForeignKey(nameof(AID))]
        [InverseProperty(nameof(Assessment.Pets))]
        public virtual Assessment AIDNavigation { get; set; }
    }
}
