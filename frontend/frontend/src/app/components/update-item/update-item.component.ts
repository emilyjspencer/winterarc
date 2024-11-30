import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ICategory } from '../../interfaces/Category';
import { IItem } from '../../interfaces/Item';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { ItemService } from '../../services/item.service';
import { FormsModule } from '@angular/forms';
import { IUpdateItem } from '../../interfaces/IUpdateItem';
@Component({
  selector: 'app-update-item',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './update-item.component.html',
  styleUrl: './update-item.component.css'
})
export class UpdateItemComponent {

  id?: string | null = null;

  categories$?: Observable<ICategory[]>
  
  selectedCategories?: string[];

  updateItemSubscription?: Subscription;

  getItemSubscription?: Subscription;

  deleteItemSubscription?: Subscription;
  routeSubscription?: Subscription


  item!: IItem;
  constructor(private itemService: ItemService,
    private categoryService: CategoryService, private router: Router,
    private route: ActivatedRoute,
  ) {

  }


  ngOnInit(): void {
  
   this.categories$ = this.categoryService.getAllCategories();

    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id')

   
        if(this.id) {
        this.getItemSubscription = this.itemService.getItem(this.id).subscribe({
          next: (response) => {
            this.item = response; 
            this.selectedCategories = response.categories.map((x: { id: any; }) => x.id); 
           
          }
        })
        }
      }
    })
       


      }

      onFormSubmit(): void {
   
        if (this.item && this.id) {
          var updateItem: IUpdateItem = {
            name: this.item.name,
            content: this.item.content,
            isVisible: this.item.isVisible,

            publishedDate: this.item.publishedDate,

            status: this.item.status,
            categories: this.selectedCategories ?? [],
            caption: this.item.caption,
           
          };

          this.updateItemSubscription = this.itemService
          .updateItem(this.id, updateItem)
          .subscribe({
            next: (response) => {
              this.router.navigateByUrl('/items');
            },
          });
      }
    }
  
  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
    this.updateItemSubscription?.unsubscribe();
    this.getItemSubscription?.unsubscribe();
  }

  onDelete(): void {
    if (this.id) {
      this.deleteItemSubscription = this.itemService
        .deleteItem(this.id)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/items');
          },
        });
    }
  }

  
}
