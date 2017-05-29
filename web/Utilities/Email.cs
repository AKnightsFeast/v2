using System.Net.Mail;

namespace v2.web.Utilities
{
    public static class Email
    {
        public static void Send(string name, string email, string message)
        {
            new SmtpClient().Send(
                new MailMessage(
                    email.Trim(),
                    "cheflaura@aknightsfeast.com",
                    "\"" + name.Trim() + "\" has sent you a message from AKnightsFeast.com!",
                    message.Trim()
                )
            );
        }
    }
}