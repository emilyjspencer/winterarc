using Backend.Database.CodePulse.API.Data;
using Backend.Models;
using Backend.Repositories.Interface;

namespace Backend.Repositories.Concrete
{
    public class GoalRepository : IGoalRepository
    {
        private readonly ApplicationDbContext dbContext;
        public GoalRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<Goal> CreateAsync(Goal goal)
        {
            await dbContext. AddAsync(goal);
            await dbContext.SaveChangesAsync();
            return goal;
        }
    }
}
