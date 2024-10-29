import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddGoal } from '../interfaces/AddGoal';
import { GoalComponent } from '../components/goal/goal.component';
import { Goal } from '../interfaces/Goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient) { }

  apiBaseUrl: string = "https://localhost:7078";

  createGoal(data: AddGoal): Observable<GoalComponent> {
    return this.http.post<GoalComponent>('https://localhost:7078/api/Goal', data)
  }

  getAllGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.apiBaseUrl + '/api/Goal')
  }
  
}
