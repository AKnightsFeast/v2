using System.Web;
using System.Web.Optimization;

namespace v2.web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/materialize").Include(
                "~/Scripts/materialize/materialize.min.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/respond").Include(
                "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/book").Include(
                "~/Scripts/pageturn/jquery.mousewheel.js",
                "~/Scripts/pageturn/jquery.jscrollpane.min.js",
                "~/Scripts/pageturn/jquerypp.custom.js",
                "~/Scripts/pageturn/jquery.bookblock.js",
                "~/Scripts/pageturn/page.js"));

            bundles.Add(new ScriptBundle("~/bundles/calendar").Include(
                "~/Scripts/react/dist/calendar.js"));

            bundles.Add(new StyleBundle("~/Content/home").Include(
                      "~/Content/home.css",
                      "~/Content/timeline.css"));

            bundles.Add(new StyleBundle("~/Content/site").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/menu").Include("~/Content/menus.css"));

            bundles.Add(new StyleBundle("~/Content/calendar").Include(
                "~/Scripts/react/dist/calendar.css"));
        }
    }
}
