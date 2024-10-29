import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GoalService } from '../../services/goal.service';
import { Goal } from '../../interfaces/Goal';
import { RouterModule } from '@angular/router';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [RouterModule, CommonModule, NgFor, AsyncPipe],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent {

  
  goals$?: Observable<Goal[]>;

  constructor(private goalService: GoalService) {}

  ngOnInit(): void {
    this.goals$ = this.goalService.getAllGoals();
  }
}
