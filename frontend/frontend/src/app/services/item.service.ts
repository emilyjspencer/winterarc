import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IItem } from '../interfaces/Item';
import { Observable } from 'rxjs';
import { ItemComponent } from '../components/item/item.component';
import { IAddItem } from '../interfaces/AddItem';
import { IUpdateItem } from '../interfaces/IUpdateItem';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  apiBaseUrl: string = "https://localhost:7078";

  createItem(data: IAddItem): Observable<ItemComponent> {
    return this.http.post<ItemComponent>(this.apiBaseUrl + '/api/Item', data)
  }

  getAllItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>(this.apiBaseUrl + '/api/Item')
  }

  deleteItem(id: string): Observable<IItem> {
    return this.http.delete<IItem>(this.apiBaseUrl + '/api/Item/' + id);
  }

  getItem(id: string): Observable<IItem> {
    return this.http.get<IItem>(this.apiBaseUrl + '/api/blogposts/GetBlogPostById/' + id)
  }

  
  updateItem(
    id: string,
    updatedItem: IUpdateItem
  ): Observable<IItem> {
    return this.http.put<IItem>(
     this.apiBaseUrl + '/api/Item/' + id,
      updatedItem
    );
  }
}
