using System;
using System.Collections.Generic;

namespace site.Models
{
    public class Recipient
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public Address Address { get; set; }
    }
}