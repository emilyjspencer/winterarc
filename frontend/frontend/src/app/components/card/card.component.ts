import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() name?: string = '';
  @Input() description = '';
  @Input() image = '';
  @Input() content?: string = '';
  @Input() status?: string = '';
  
}
