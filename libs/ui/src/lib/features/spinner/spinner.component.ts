import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tm-ui-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class='ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>`,
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
}
