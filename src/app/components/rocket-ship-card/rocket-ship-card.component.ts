import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rocket-ship-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rocket-ship-card.component.html',
  styleUrl: './rocket-ship-card.component.scss'
})
export class RocketShipCardComponent {
  title = "select-country";
}
