import { Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { GoalComponent } from './components/goal/goal.component';

export const routes: Routes = [
    {path: 'items', component: ItemComponent},
    {path: 'goals', component: GoalComponent},
];
