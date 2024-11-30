import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemComponent } from '../item/item.component';
import { ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IItem } from '../../interfaces/Item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {

  items$?: Observable<IItem[]>;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items$ = this.itemService.getAllItems();
  }
}
