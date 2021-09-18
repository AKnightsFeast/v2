using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;

using IdentityServer4.EntityFramework.Options;

using AKF.Common.Models;

namespace AKF.Database.Context
{
    public class AuthorizationContext : ApiAuthorizationDbContext<AppUser>
    {
        public AuthorizationContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {
        }
    }
}