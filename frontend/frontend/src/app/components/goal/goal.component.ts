import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddGoal } from '../../interfaces/AddGoal';
import { GoalService } from '../../services/goal.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/Category';
import { CategoryService } from '../../services/category.service';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent implements OnInit {

    goal: AddGoal

    categories$?: Observable<Category[]> | undefined
  
    constructor(private goalService: GoalService, private router: Router, private categoryService: CategoryService) {
      this.goal = {
        name: '',
        description: '',
        content: '',
        publishedDate: new Date(),
        status: '',
        categories: []
      }
  }
  
  onFormSubmit(): void {
    console.log(this.goal)
  
      this.goalService.createGoal(this.goal).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/goals');
        },
      });
    }

    ngOnInit() {
  
      this.categories$ = this.categoryService.getAllCategories();
      }
}
