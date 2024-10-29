﻿using Azure.Core;
using Backend.DTOs;
using Backend.Models;
using Backend.Repositories.Concrete;
using Backend.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{




    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository itemRepository;
        private readonly ICategoryRepository categoryRepository;


        public ItemController(IItemRepository itemRepository, ICategoryRepository categoryRepository)
        {
            this.itemRepository = itemRepository;
            this.categoryRepository = categoryRepository;

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
                Status = request.Status,
                Categories = new List<Category>()
            };

            foreach (var categoryGuid in request.Categories)
            {
                var existingCategory = await categoryRepository.GetById(categoryGuid);
                if (existingCategory is not null)
                {
                    item.Categories.Add(existingCategory);
                }
            }
            item = await itemRepository.CreateAsync(item);

            var response = new ItemDTO
            {
                Id = item.Id,
                Name = request.Name,
                Caption = request.Caption,
                Content = request.Content,
                IsVisible = request.IsVisible,
                Status = request.Status,
                PublishedDate = request.PublishedDate,
                Categories = item.Categories.Select(x => new CategoryDTO
                {
                    Id = x.Id,
                    Name = x.Name,
                }).ToList()
            };

            return Ok(response);
        }


        [HttpGet]
        public async Task<IActionResult> GetAllItems()
        {
            var items = await itemRepository.GetAllAsync();

            var response = new List<ItemDTO>();

            foreach (var item in items)
            {
                response.Add(new ItemDTO
                {
                    Id = item.Id,
                    Name = item.Name,
                    Caption = item.Caption,
                    Content = item.Content,
                    IsVisible = item.IsVisible,
                    Status = item.Status,
                    PublishedDate = item.PublishedDate,
                    Categories = item.Categories.Select(cat => new CategoryDTO
                    {
                        Id = cat.Id,
                        Name = cat.Name,
                    }).ToList()

                });
            }
            return Ok(response);

        }
    }



}

