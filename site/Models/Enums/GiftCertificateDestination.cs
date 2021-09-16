using System.Runtime.Serialization;

namespace site.Models.Enums
{
    public enum GiftCertificateDestination
    {
        [EnumMember(Value = "From")]
        Purchaser = 1,
        [EnumMember(Value = "To")]
        Recipient = 2
    }
}