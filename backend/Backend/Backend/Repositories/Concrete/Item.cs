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

        public async Task<Item> DeleteAsync(Guid id)
        {
            var existingItem = await dbContext.Items.FirstOrDefaultAsync(p => p.Id == id);

            if (existingItem != null)
            {
                dbContext.Remove(existingItem);
                await dbContext.SaveChangesAsync();
                return existingItem;
            }

            return null;
        }


        public async Task<Item> UpdateAsync(Item item)
        {
            var existingItem = await dbContext.Items.Include(p => p.Categories).FirstOrDefaultAsync(x => x.Id == item.Id);

            if (existingItem == null)
            {
                return null;
            }

            dbContext.Entry(existingItem).CurrentValues.SetValues(item);
            existingItem.Categories = item.Categories;

            await dbContext.SaveChangesAsync();

            return item;
        }


    }
}

