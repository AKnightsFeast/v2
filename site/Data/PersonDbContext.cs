using Microsoft.EntityFrameworkCore;

using site.Models;

namespace site.Data
{
    public class PersonDbContext : DbContext
    {
        public PersonDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Person> People { get; set; }
    }
}