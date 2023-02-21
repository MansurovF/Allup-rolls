namespace CarBack.Models
{
    public class Model
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Models { get; set; }
        public string? Information { get; set; }
        public int CarId { get; set; }

        public Cars Cars{ get; set; }

    }
}
