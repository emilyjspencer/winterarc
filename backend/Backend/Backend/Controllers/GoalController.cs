using Azure.Core;
using Azure;
using Backend.DTOs;
using Backend.Models;
using Backend.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;
using Backend.Repositories.Concrete;

namespace Backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class GoalController : ControllerBase
    {
        private readonly IGoalRepository goalRepository;
        private readonly ICategoryRepository categoryRepository;

        public GoalController(IGoalRepository goalRepository, ICategoryRepository categoryRepository)
        {
            this.goalRepository = goalRepository;
            this.categoryRepository = categoryRepository; ;
        }

        [HttpPost]
        public async Task<IActionResult> CreateGoal([FromBody] CreateGoalRequestDTO request)
        {

            var goal = new Goal
            {

                Name = request.Name,
                Description = request.Description,
                Content = request.Content,
                PublishedDate = request.PublishedDate,
                Status = request.Status,
                Categories = new List<Category>()
            };

            foreach (var categoryGuid in request.Categories)
            {
                var existingCategory = await categoryRepository.GetById(categoryGuid);
                if (existingCategory is not null)
                {
                    goal.Categories.Add(existingCategory);
                }
            }
            goal = await goalRepository.CreateAsync(goal);

            var response = new GoalDTO
            {
                Id = goal.Id,
                Name = request.Name,
                Description = request.Description,
                Content = request.Content,
                PublishedDate = request.PublishedDate,
                Status = request.Status,
                Categories = goal.Categories.Select(x => new CategoryDTO
                {
                    Id = x.Id,
                    Name = x.Name,
                }).ToList()
            };

            return Ok(response);
        }


        [HttpGet]
        public async Task<IActionResult> GetAllGoals()
        {
            var goals = await goalRepository.GetAllAsync();

            var response = new List<GoalDTO>();

            foreach (var goal in goals)
            {
                response.Add(new GoalDTO
                {
                    Id = goal.Id,
                    Name = goal.Name,
                    Content = goal.Content,
                    Status = goal.Status,
                    PublishedDate = goal.PublishedDate,
                    Categories = goal.Categories.Select(cat => new CategoryDTO
                    {
                        Id = cat.Id,
                        Name = cat.Name,
                    }).ToList()

                });
            }
            return Ok(response);

        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGoal([FromRoute] Guid id)
        {
            var deletedGoal = await goalRepository.DeleteAsync(id);

            if (deletedGoal == null)
                return NotFound();

            var response = new Goal
            {
                Id = deletedGoal.Id,
                Name = deletedGoal.Name,
                Content = deletedGoal.Content,
                Status = deletedGoal.Status,
                PublishedDate = deletedGoal.PublishedDate,
            };

            return Ok(response);
        }

    }
}


