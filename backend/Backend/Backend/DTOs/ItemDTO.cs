namespace Backend.DTOs
{
    public class ItemDTO
    {

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Caption { get; set; }

        public string Content { get; set; }

        public DateTime PublishedDate { get; set; }

        public Boolean IsVisible { get; set; }
    }
}
