using Backend.Models;

namespace Backend.Repositories.Interface
{
    public interface ICategoryRepository
    {
        Task<Category> CreateAsync(Category category);

        Task<Category> GetById(Guid id);


        Task<IEnumerable<Category>> GetAllAsync();
    }
}
