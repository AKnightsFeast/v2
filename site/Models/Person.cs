using System;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace site.Models
{
    [Serializable]
    [Table("People", Schema = "lknight1")]
    public class Person
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity), JsonIgnore]
        public int ID { get; private set; }
        public int AID { get; private set; }

        [Required, Column("FName"), JsonPropertyName("fname")]
        public string FirstName { get; set; }

        [Required, Column("LName"), JsonPropertyName("lname")]
        public string LastName { get; set; }

        [JsonPropertyName("mi")]
        public string MiddleInitial { get; set; }
        public DateTime? DOB { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public bool IsContact { get; set; }

        [ForeignKey("AID")] public virtual Assessment Assessment { get; set; }
    }
}