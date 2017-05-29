using System.Web.Mvc;

namespace v2.web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "A Knight's Feast";

            return View();
        }
    }
}
