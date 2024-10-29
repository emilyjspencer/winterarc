using Backend.Database.CodePulse.API.Data;
using Backend.Models;
using Backend.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

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


        public async Task<IEnumerable<Item>> GetAllAsync()
        {
       
            return await dbContext.Items.Include(x => x.Categories).ToListAsync();
        }


    }
}
