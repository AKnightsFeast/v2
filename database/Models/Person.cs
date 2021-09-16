using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AKF.Database.Models
{
    [Table("People", Schema = "lknight1")]
    public partial class Person
    {
        [Key]
        public int ID { get; set; }

        /// <summary>
        /// assessment id
        /// </summary>
        public int AID { get; set; }
        [Required]
        [StringLength(30)]
        public string FName { get; set; }
        [Required]
        [StringLength(50)]
        public string LName { get; set; }
        [StringLength(1)]
        public string MiddleInitial { get; set; }
        [Column(TypeName = "date")]
        public DateTime? DOB { get; set; }
        [StringLength(70)]
        public string Email { get; set; }
        [StringLength(14)]
        public string Phone { get; set; }
        public bool? IsContact { get; set; }

        [ForeignKey(nameof(AID))]
        [InverseProperty(nameof(Assessment.People))]
        public virtual Assessment AIDNavigation { get; set; }
    }
}
