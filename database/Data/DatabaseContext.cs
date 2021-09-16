
using AKF.Database.Data.Configurations;
using AKF.Database.Models;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore;
using System;
namespace AKF.Database.Data
{
    public partial class DatabaseContext : DbContext
    {
        public virtual DbSet<Assessment> Assessments { get; set; }
        public virtual DbSet<Person> People { get; set; }
        public virtual DbSet<Pet> Pets { get; set; }
        public virtual DbSet<State> States { get; set; }
        public virtual DbSet<User> Users { get; set; }

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=localhost;Initial Catalog=aknightsfeast;Integrated Security=True;Trust Server Certificate=True;Command Timeout=300");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.ApplyConfiguration(new Configurations.AssessmentConfiguration());
            modelBuilder.ApplyConfiguration(new Configurations.PersonConfiguration());
            modelBuilder.ApplyConfiguration(new Configurations.PetConfiguration());
            modelBuilder.ApplyConfiguration(new Configurations.StateConfiguration());
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
