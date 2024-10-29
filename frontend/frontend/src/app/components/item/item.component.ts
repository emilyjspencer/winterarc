import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { AddItem } from '../../interfaces/AddItem';
import { Item } from '../../interfaces/Item';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { Category } from '../../interfaces/Category';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [FormsModule, CommonModule, AsyncPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {

  item: AddItem

  categories$?: Observable<Category[]> 

  constructor(private itemService: ItemService, private router: Router, private categoryService: CategoryService) {
    this.item = {
      name: '',
      caption: '',
      content: '',
      isVisible: true,
      publishedDate: new Date(),
      status: '',
      categories: []
    }
}

onFormSubmit(): void {
  console.log(this.item)

    this.itemService.createItem(this.item).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/items');
      },
    });
  }

  ngOnInit() {
    this.categories$ = this.categoryService.getAllCategories();
 }
}

