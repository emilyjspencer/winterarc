import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.css'
})
export class ModalContentComponent {

  constructor(private modalService: ModalService) { }

  
}
