import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { AddItem } from '../../interfaces/Item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  item: AddItem

  constructor(private itemService: ItemService, private router: Router) {
    this.item = {
      name: '',
      caption: '',
      content: '',
      isVisible: true,
      publishedDate: new Date(),
    }
}



 
}

