namespace Backend.Database
{
    using Backend.Models;
    using Microsoft.EntityFrameworkCore;


    namespace CodePulse.API.Data
    {
        public class ApplicationDbContext : DbContext
        {

            public ApplicationDbContext(DbContextOptions options) : base(options) { }

            public DbSet<Item> Items { get; set; }
            public DbSet<Goal> Goals { get; set; }

            public DbSet<Category> Categories { get; set; }

        }
    }
}
