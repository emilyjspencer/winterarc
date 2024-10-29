import { Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { GoalComponent } from './components/goal/goal.component';
import { HomeComponent } from './components/home/home.component';
import { ProgressComponent } from './components/progress/progress.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { InfoComponent } from './components/info/info.component';
import { ItemsComponent } from './components/items/items.component';
import { AboutComponent } from './components/about/about.component';
import { GoalsComponent } from './components/goals/goals.component';

export const routes: Routes = [
    {path: 'items', component: ItemsComponent},
    {path: 'goals', component: GoalsComponent},
    {path: 'items/add', component: ItemComponent},
    {path: 'goals/add', component: GoalComponent},
    {path: '', component: HomeComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'info', component: InfoComponent},
    {path: 'about', component: AboutComponent},
    {path: '*', component: NotfoundComponent}
];
