import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { GoalComponent } from './components/goal/goal.component';
import { NavComponent } from './components/nav/nav.component';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './components/modal/modal.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemComponent, GoalComponent, NavComponent, ModalComponent, ModalContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  showModal = signal(true);

  modal = inject(ModalService)
}
