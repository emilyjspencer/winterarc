namespace Backend.DTOs
{
    public class UpdateItemRequestDTO
    {
     
       
            public string Name { get; set; }
          
            public string Content { get; set; }

 
            public DateTime PublishedDate { get; set; }

            public string Status { get; set; }
            public Boolean IsVisible { get; set; }

            public List<Guid> Categories { get; set; } = new List<Guid>();
        }
    }


