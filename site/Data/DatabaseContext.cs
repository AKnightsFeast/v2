using site.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace site.Data
{
    public class DatabaseContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<Assessment> Assessments { get; set; }
        public DbSet<Person> People { get; set; }
        public DbSet<Pet> Pets { get; set; }

        public DatabaseContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Owned<Address>();

            modelBuilder.Entity<Assessment>().Property(x => x.Container).HasColumnType("smallint");
            modelBuilder.Entity<Assessment>().Property(x => x.PackageStyle).HasColumnType("smallint");
            modelBuilder.Entity<Assessment>().Property(x => x.BeefPrep).HasConversion(typeof(decimal)).HasColumnType("decimal");
            modelBuilder.Entity<Assessment>().Property(x => x.ChickenPrep).HasConversion(typeof(decimal)).HasColumnType("decimal");
            modelBuilder.Entity<Assessment>().Property(x => x.SpiceLikes).HasConversion(typeof(decimal)).HasColumnType("decimal");

            modelBuilder.Entity<Pet>().Property(x => x.Location).HasColumnType("decimal");
        }
    }
}
