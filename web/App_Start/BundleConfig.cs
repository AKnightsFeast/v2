﻿using System.Web;
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

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/bootstrap.js",
                "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/book").Include(
                "~/Scripts/pageturn/jquery.mousewheel.js",
                "~/Scripts/pageturn/jquery.jscrollpane.min.js",
                "~/Scripts/pageturn/jquerypp.custom.js",
                "~/Scripts/pageturn/jquery.bookblock.js",
                "~/Scripts/pageturn/page.js"));

            bundles.Add(new StyleBundle("~/Content/home").Include(
                      "~/Content/home.css",
                      "~/Content/timeline.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
