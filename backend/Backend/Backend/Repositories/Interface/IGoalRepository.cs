using Backend.Models;

namespace Backend.Repositories.Interface
{
    public interface IGoalRepository
    {
        Task<Goal> CreateAsync(Goal goal);
    }
}
