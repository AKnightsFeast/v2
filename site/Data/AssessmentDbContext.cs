using Microsoft.EntityFrameworkCore;

using site.Models;

namespace site.Data
{
    public class AssessmentDbContext : DbContext
    {
        public AssessmentDbContext(DbContextOptions<AssessmentDbContext> options) : base(options) { }
        public DbSet<Assessment> Assessments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Owned<Address>();
            modelBuilder.Entity<Assessment>().Property(x => x.Container).HasColumnType("smallint");
            modelBuilder.Entity<Assessment>().Property(x => x.PackageStyle).HasColumnType("smallint");
            modelBuilder.Entity<Assessment>().Property(x => x.BeefPrep).HasColumnType("decimal");
            modelBuilder.Entity<Assessment>().Property(x => x.ChickenPrep).HasColumnType("decimal");
            modelBuilder.Entity<Assessment>().Property(x => x.SpiceLikes).HasColumnType("decimal");
        }
    }
}