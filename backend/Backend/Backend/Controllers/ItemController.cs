using Backend.DTOs;
using Backend.Models;
using Backend.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
   



        [Route("api/[controller]")]
        [ApiController]
        public class ItemController : ControllerBase
        {
            private readonly IItemRepository itemRepository;


            public ItemController(IItemRepository itemRepository)
            {
                this.itemRepository = itemRepository;

            }

            [HttpPost]
            public async Task<IActionResult> CreateItem([FromBody] CreateItemRequestDTO request)
            {

                var item = new Item
                {

                    Name = request.Name,
                    Caption = request.Caption,
                    Content = request.Content,
                    IsVisible = request.IsVisible,
                    PublishedDate = request.PublishedDate,
                    Status = request.Status

                };


                item = await itemRepository.CreateAsync(item);

                var response = new Item
                {
                    Id = item.Id,
                    Name = request.Name,
                    Caption = request.Caption,
                    Content = request.Content,
                    IsVisible = request.IsVisible,
                    PublishedDate = request.PublishedDate,

                };

                return Ok(response);
            }
        }
    }

