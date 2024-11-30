import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GoalService } from '../../services/goal.service';
import { IGoal } from '../../interfaces/Goal';
import { RouterModule } from '@angular/router';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [RouterModule, CommonModule, NgFor, AsyncPipe, CardComponent],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent {

  
  goals$?: Observable<IGoal[]>;

  constructor(private goalService: GoalService) {}

  ngOnInit(): void {
    this.goals$ = this.goalService.getAllGoals();
  }
}
