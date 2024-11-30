import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddGoal } from '../interfaces/AddGoal';
import { GoalComponent } from '../components/goal/goal.component';
import { IGoal } from '../interfaces/Goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient) { }

  apiBaseUrl: string = "https://localhost:7078";

  createGoal(data: IAddGoal): Observable<GoalComponent> {
    return this.http.post<GoalComponent>('https://localhost:7078/api/Goal', data)
  }

  getAllGoals(): Observable<IGoal[]> {
    return this.http.get<IGoal[]>(this.apiBaseUrl + '/api/Goal')
  }

}
