import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/Category';
import { INewCategory } from '../interfaces/NewCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  addCategory(item: INewCategory): Observable<void> {
     return this.http.post<void>('https://localhost:7078/api/categories', item)
  }

  getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('https://localhost:7078/api/categories')
   }
}
