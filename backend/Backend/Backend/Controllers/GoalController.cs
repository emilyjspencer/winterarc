using Azure.Core;
using Azure;
using Backend.DTOs;
using Backend.Models;
using Backend.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{

        [Route("api/[controller]")]
        [ApiController]
        public class GoalController : ControllerBase
        {
            private readonly IGoalRepository goalRepository;


            public GoalController(IGoalRepository goalRepository)
            {
                this.goalRepository = goalRepository;

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
                    Status = request.Status

                };
            
            goal = await goalRepository.CreateAsync(goal);

            var response = new Goal
            {
                Id = goal.Id,
                Name = request.Name,
                Description = request.Description,
                Content = request.Content,
                PublishedDate = request.PublishedDate,
                Status = request.Status
            };

                return Ok(response);
        }
    }

    } 