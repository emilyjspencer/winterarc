namespace Backend.DTOs


{
    public class CreateGoalRequestDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public string Content { get; set; }

        public DateTime PublishedDate { get; set; }

        public string Status { get; set; }

        public Guid[] Categories { get; set; }
    }
}
