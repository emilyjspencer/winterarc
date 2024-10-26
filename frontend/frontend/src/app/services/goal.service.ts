import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddGoal } from '../interfaces/Goal';
import { GoalComponent } from '../components/goal/goal.component';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient) { }

  apiBaseUrl: string = "https://localhost:7078";

  createGoal(data: AddGoal): Observable<GoalComponent> {
    return this.http.post<GoalComponent>(this.apiBaseUrl + '/api/goals', data)
  }
}
