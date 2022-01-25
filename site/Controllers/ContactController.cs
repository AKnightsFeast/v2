using System;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using site.Models;
using site.Utilities;

namespace site.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController : ControllerBase
    {
        Email _email;

        public ContactController(Email email)
        {
            _email = email;
        }

        [HttpPost]
        public async Task<JsonResult> Index(ContactMessage message)
        {
            try
            {
                await _email.Send(message.Sender, message.Email, message.Text);

                return new JsonResult(new {
                    Success = true,
                    Modal = new {
                        Title = "Thanks!",
                        Message = "<p>Thanks for contacting Chef Laura!</p><p>She will get back to you shortly!</p>"
                    }
                });
            }
            catch (Exception ex)
            {
                return new JsonResult(new {
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