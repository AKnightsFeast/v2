using System;

using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace site.Utilities
{
    public static class Configuration  
    {  
        public static void AddConfiguration<T>(this IServiceCollection services, IConfiguration configuration, string configurationTag = null) where T : class  
        {  
            if (string.IsNullOrEmpty(configurationTag)) configurationTag = typeof(T).Name;  
    
            var instance = Activator.CreateInstance<T>();
  
            new ConfigureFromConfigurationOptions<T>(configuration.GetSection(configurationTag)).Configure(instance);

            services.AddSingleton(instance);  
        }  

/*
        public static int MinRequiredPasswordLength
        {
            get
            {
                var minPwdLength = 0;

                int.TryParse(ConfigurationManager.AppSettings["MinRequiredPasswordLength"], out minPwdLength);

                return minPwdLength;
            }
        }
*/
    }
}