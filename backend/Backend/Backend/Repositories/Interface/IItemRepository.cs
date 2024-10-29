using Backend.Database.CodePulse.API.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories.Interface
{
    public interface IItemRepository
    {


        Task<Item> CreateAsync(Item item);

        Task<IEnumerable<Item>> GetAllAsync();
    }
}
