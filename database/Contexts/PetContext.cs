﻿using System.Data.Entity;

using v2.models;

namespace v2.database.Contexts
{
    public class PetContext : DbContext
    {
        public PetContext() : base("AKnightsFeast") { }
        public DbSet<Pet> Pets { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pet>().Property(x => x.Location).HasColumnType("decimal");
        }
    }
}