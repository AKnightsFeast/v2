﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using AKF.Database.Context;
using AKF.Database.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore;
using System;

#nullable disable

namespace AKF.Database.Context.Configurations
{
    public partial class AssessmentConfiguration : IEntityTypeConfiguration<Assessment>
    {
        public void Configure(EntityTypeBuilder<Assessment> entity)
        {
            entity.Property(e => e.CreationDate).HasDefaultValueSql("(getdate())");

            entity.Property(e => e.State)
                .IsUnicode(false)
                .IsFixedLength(true);

            entity.HasOne(d => d.StateNavigation)
                .WithMany(p => p.Assessments)
                .HasForeignKey(d => d.State)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_States_Assessments");

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<Assessment> entity);
    }
}
