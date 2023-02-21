using System.ComponentModel.DataAnnotations;

namespace AllupTrying2.Models
{
    public class Tag:BaseEntity
    {
        [StringLength(100)]

        public  string Name { get; set; }
    }
}
