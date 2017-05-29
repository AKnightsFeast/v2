using System;
using System.Web.Mvc;

using v2.web.Utilities;
using v2.web.Attributes;

namespace v2.web.Controllers
{
    public class ContactController : Controller
    {
        //
        // GET: /Contact/
        [HttpPost]
        [AjaxOnly]
        [ValidateAntiForgeryToken]
        public ActionResult Index(string name, string email, string message)
        {
            try
            {
                Email.Send(name, email, message);

                return Json(new {
                    Success = true,
                    Modal = new {
                        Title = "Thanks!",
                        Message = "<p>Thanks for contacting Chef Laura!</p><p>She will get back to you shortly!</p>"
                    }
                });
            }
            catch (Exception ex)
            {
                return Json(new {
                    Success = false,
                    Modal = new {
                        Title = "Oh No!",
                        Message = "There was an error sending your message.  Please try resending."
                    }
                });
            }
        }
    }
}