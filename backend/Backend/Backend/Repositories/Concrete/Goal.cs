using Backend.Database.CodePulse.API.Data;
using Backend.Models;
using Backend.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

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
            await dbContext.Goals.AddAsync(goal);
            await dbContext.SaveChangesAsync();
            return goal;
        }

        public async Task<IEnumerable<Goal>> GetAllAsync()
        {

            return await dbContext.Goals.Include(x => x.Categories).ToListAsync();
        }

        public async Task<Goal> DeleteAsync(Guid id)
        {
            var existingGoal = await dbContext.Goals.FirstOrDefaultAsync(p => p.Id == id);

            if (existingGoal != null)
            {
                dbContext.Remove(existingGoal);
                await dbContext.SaveChangesAsync();
                return existingGoal;
            }

            return null;
        }
    }
}

