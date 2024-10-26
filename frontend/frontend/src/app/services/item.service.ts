import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddItem } from '../interfaces/Item';
import { Observable } from 'rxjs';
import { ItemComponent } from '../components/item/item.component';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  apiBaseUrl: string = "https://localhost:7078";

  createItem(data: AddItem): Observable<ItemComponent> {
    return this.http.post<ItemComponent>(this.apiBaseUrl + '/api/Item', data)
  }
}
