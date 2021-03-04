using System;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using Microsoft.EntityFrameworkCore;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.AspNetCore.HttpsPolicy;

using site.Data;
using site.Models;

namespace site
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            string connString = Configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite(connString))
                    .AddDbContext<AssessmentDbContext>(options => options.UseSqlite(connString))
                    .AddDbContext<PersonDbContext>(options => options.UseSqlite(connString))
                    .AddDbContext<PersonDbContext>(options => options.UseSqlite(connString));

            services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddEntityFrameworkStores<ApplicationDbContext>();

            services.AddIdentityServer()
                .AddApiAuthorization<ApplicationUser, ApplicationDbContext>();

            services.AddAuthentication()
                .AddIdentityServerJwt();

            services.AddMvcCore()
                    .AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);

            // services.AddMvc(options =>
            // {
            //     options.CacheProfiles.Add("No-Cache", new CacheProfile()
            //     {
            //         NoStore = true,
            //         Duration = DateTime.UtcNow.AddDays(-1).Second
            //     });
            // });

            //services.AddControllers();
            //services.AddControllersWithViews();
            //services.AddRazorPages();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "Client/public";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseIdentityServer();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                //endpoints.MapControllerRoute(name: "defaultapi", pattern: "api/{controller}/{id?}");
                //endpoints.MapControllerRoute(name: "default", pattern: "{controller}/{action=Index}/{id?}");
                endpoints.MapControllers();
                //endpoints.MapRazorPages();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "Client";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
