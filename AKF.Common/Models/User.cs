﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable enable

namespace AKF.Common.Models
{
    [Table("Users", Schema = "lknight1")]
    public partial class User
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [StringLength(70)]
        public string UName { get; set; } = default!;
    }
}