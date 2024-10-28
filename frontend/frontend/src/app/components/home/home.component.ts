import { Component, inject, signal } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModalComponent, ModalContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showModal = signal(true);

  modal = inject(ModalService)
}
