import { Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { GoalComponent } from './components/goal/goal.component';
import { HomeComponent } from './components/home/home.component';
import { ProgressComponent } from './components/progress/progress.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { InfoComponent } from './components/info/info.component';

export const routes: Routes = [
    {path: 'items', component: ItemComponent},
    {path: 'goals', component: GoalComponent},
    {path: '', component: HomeComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'info', component: InfoComponent},
    {path: '*', component: NotfoundComponent}
];
