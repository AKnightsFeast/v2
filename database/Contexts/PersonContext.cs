using System.Data.Entity;

using v2.models;

namespace v2.database.Contexts
{
    public class PersonContext : DbContext
    {
        public PersonContext() : base("AKnightsFeast") { }
        public DbSet<Person> People { get; set; }
    }
}