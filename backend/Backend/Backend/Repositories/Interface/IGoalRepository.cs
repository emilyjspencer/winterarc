using Backend.Models;

namespace Backend.Repositories.Interface
{
    public interface IGoalRepository
    {
        Task<Goal> CreateAsync(Goal goal);

        Task<IEnumerable<Goal>> GetAllAsync();

        Task<Goal> DeleteAsync(Guid id);
    }
}
