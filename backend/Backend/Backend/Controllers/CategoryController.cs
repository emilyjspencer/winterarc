using Backend.DTOs;
using Backend.Models;
using Backend.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
 
    
        [Route("api/[controller]")]
        [ApiController]
        public class CategoriesController : ControllerBase
        {


            private readonly ICategoryRepository categoryRepository;

            public CategoriesController(ICategoryRepository categoryRepository)
            {

                this.categoryRepository = categoryRepository;
            }

            [HttpPost]
            public async Task<IActionResult> CreateCategory(CreateCategoryRequestDTO request)
            {
              
                var category = new Category
                {
                    Name = request.Name,
                };

           
                await categoryRepository.CreateAsync(category);

             
                var response = new CategoryDTO
                {
                    Id = category.Id,
                    Name = category.Name,
                };

                return Ok(response);
            }


        }
    }
