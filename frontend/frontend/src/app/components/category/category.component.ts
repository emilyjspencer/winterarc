import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { Router, RouterModule } from '@angular/router';
import { AddCategory } from '../../interfaces/Category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  model: AddCategory;

  private addCategorySubscription!: Subscription
  

  constructor(private categoryService: CategoryService, private router: Router)  {
    this.model = {
      name: 'emily',
      id: ''
    }
  }


  onFormSubmit() {
    console.log(this.model)
    this.addCategorySubscription = this.categoryService.addCategory(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('categories');
       console.log('This was successful')
      }
    })
  }

  ngOnDestroy(): void {
    this.addCategorySubscription.unsubscribe()

  }
}
