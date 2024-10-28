import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/Category';
import { NewCategory } from '../interfaces/NewCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  addCategory(item: NewCategory): Observable<void> {
     return this.http.post<void>('https://localhost:7078/api/categories', item)
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('https://localhost:7078/api/categories')
   }
}
