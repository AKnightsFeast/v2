namespace site.Configuration
{
    public class EmailSettings
    {
        public string Host { get; set; }
        public int? Port { get; set; }
        public string Recipient { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}