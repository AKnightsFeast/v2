using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

using site.Configuration;

namespace site.Utilities
{
    public class Email
    {
        SmtpClient _smtpClient;
        string _recipient;

        public Email(EmailSettings emailSettings)
        {
            _smtpClient = new SmtpClient(emailSettings.Host, emailSettings.Port ?? 25);

            if (string.IsNullOrWhiteSpace(emailSettings.Username) || string.IsNullOrWhiteSpace(emailSettings.Password))
            {
                _smtpClient.UseDefaultCredentials = true;
            }
            else
            {
                _smtpClient.Credentials = new NetworkCredential(emailSettings.Username, emailSettings.Password);
            }

            _recipient = emailSettings.Recipient;
        }

        public async Task Send(string name, string email, string message)
        {
            await _smtpClient.SendMailAsync(new MailMessage(email.Trim(), _recipient, $"{name.Trim()} has sent you a message from AKnightsFeast.com!", message.Trim()));
        }
    }
}