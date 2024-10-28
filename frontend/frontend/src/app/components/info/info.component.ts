import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule, NgFor } from '@angular/common';
import { information } from './information';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CardComponent, NgFor, CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  information = information;
}
