import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddGoal } from '../../interfaces/Goal';
import { GoalService } from '../../services/goal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {

    goal: AddGoal
  
    constructor(private itemService: GoalService, private router: Router) {
      this.goal = {
        name: '',
        description: '',
        content: '',
        publishedDate: new Date(),
        status: ''
      }
  }
  
  onFormSubmit(): void {
    console.log(this.goal)
  
      this.itemService.createGoal(this.goal).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/goals');
        },
      });
    }
}
