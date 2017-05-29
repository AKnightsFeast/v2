using System.Web.Mvc;

namespace v2.web.Areas.Menus
{
    public class MenusAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Menus";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Menus_default",
                "Menus/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}