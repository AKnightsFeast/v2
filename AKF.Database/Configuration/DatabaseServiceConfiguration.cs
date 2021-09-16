using System;
using System.Collections.Generic;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using AKF.Database.Interfaces;
using AKF.Database.Context;

namespace AKF.Database.Configuration
{
    public static class DatabaseServiceConfiguration
    {
        public static IServiceCollection AddDatabaseContext(
            this IServiceCollection services,
            string connectionString,
            ServiceLifetime lifetime = ServiceLifetime.Transient)
        {
            return services.AddDbContext<IDatabaseContext, DatabaseContext>((svc, options) =>
            {
                options.UseSqlServer(
                    connectionString,
                    sql => sql
                        .EnableRetryOnFailure(
                            maxRetryCount: 10,
                            maxRetryDelay: TimeSpan.FromSeconds(30),
                            errorNumbersToAdd: new[] { 1205 }
                        )
                        .MigrationsAssembly("AKF.Database"));
            }, lifetime);
        }
    }
}
