﻿using System;
using System.Collections.Generic;

using site.Models.Enums;

namespace site.Models
{
    public class GiftCertificate
    {
        public float Amount { get; set; }
        public Recipient To { get; set; }
        public Purchaser From { get; set; }
        public string Message { get; set; }
        public GiftCertificateDestination Where { get; set; }
        public string PayPalTransactionID { get; set; }
    }
}