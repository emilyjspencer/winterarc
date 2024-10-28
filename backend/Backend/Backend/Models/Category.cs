using Microsoft.AspNetCore.Mvc;

namespace Backend.Models
{
    public class Category
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public ICollection<Item> Items { get; set; }

        public ICollection<Goal> Goals { get; set; }
    }
}
