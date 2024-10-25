using Backend.Models;

namespace Backend.Repositories.Interface
{
    public interface IItemRepository
    {
        Task<Item> CreateAsync(Item item);
    }
}
