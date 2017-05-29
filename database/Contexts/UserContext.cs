using System.Data.Entity;

using v2.models;

namespace v2.database.Contexts
{
    public class UserContext : DbContext
    {
        public UserContext() : base("AKnightsFeast") { }

        public DbSet<UserProfile> UserProfiles { get; set; }
    }
}