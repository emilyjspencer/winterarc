using Backend.Database.CodePulse.API.Data;
using Backend.Models;
using Backend.Repositories.Interface;

namespace Backend.Repositories.Concrete
{
 
    
        public class ItemRepository : IItemRepository
        {
            private readonly ApplicationDbContext dbContext;
            public ItemRepository(ApplicationDbContext dbContext)
            {
                this.dbContext = dbContext;
            }
            public async Task<Item> CreateAsync(Item item)
            {
                await dbContext.Items.AddAsync(item);
                await dbContext.SaveChangesAsync();
                return item;
            }
        }
}
