using System;
using System.Collections.Generic;

using v2.models.Enums;

namespace v2.models
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