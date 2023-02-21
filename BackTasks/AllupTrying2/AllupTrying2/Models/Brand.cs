using System.ComponentModel.DataAnnotations;

namespace AllupTrying2.Models
{
    public class Brand:BaseEntity
    {
        [StringLength(100)]
        public string Name { get; set; }
    }
}
