using Microsoft.AspNetCore.Mvc;

namespace Backend.DTOs
{
    public class CreateGoalRequestDTO : Controller
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public string Content { get; set; }

        public DateTime PublishedDate { get; set; }

        public string Status { get; set; }
    }
}
