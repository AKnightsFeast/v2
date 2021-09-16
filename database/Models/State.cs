using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AKF.Database.Models
{
    [Table("States", Schema = "lknight1")]
    public partial class State
    {
        public State()
        {
            Assessments = new HashSet<Assessment>();
        }

        [Key]
        [StringLength(2)]
        public string Abbr { get; set; }
        [Required]
        [StringLength(250)]
        public string Name { get; set; }

        [InverseProperty(nameof(Assessment.StateNavigation))]
        public virtual ICollection<Assessment> Assessments { get; set; }
    }
}
