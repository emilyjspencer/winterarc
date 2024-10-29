import { Component, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  colour = input('red');

  get backgroundColour() {
    return `bg-${this.colour()}-500`;
  }
}
