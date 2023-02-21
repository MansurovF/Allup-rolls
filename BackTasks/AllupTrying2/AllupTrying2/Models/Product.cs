using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AllupTrying2.Models
{
    public class Product : BaseEntity
    {
        [StringLength(255)]
        public string Title { get; set; }
        [Column (TypeName ="money")]
        public double Price { get; set; }
        [Column(TypeName = "money")]
        public double DiscountedPrice { get; set; }
        [Column(TypeName = "money")]
        public double ExTax { get; set; }
        [StringLength(1000)]
        public string Seria { get; set; }
        public int Code{ get; set; }
        [StringLength(1000)]
        public string Description{ get; set; }
        [StringLength(255)]
        public string BasicInfo{ get; set; }
        [StringLength(255)]
        public string MainImage{ get; set; }
        [StringLength(255)]
        public string HoverImage{ get; set; }



        public Category Category { get; set; }

    }
}
