using Microsoft.EntityFrameworkCore;

using site.Models;

namespace site.Data
{
    public class PetDbContext : DbContext
    {
        public PetDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Pet> Pets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pet>().Property(x => x.Location).HasColumnType("decimal");
        }
    }
}