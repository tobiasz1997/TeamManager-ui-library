import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tm-ui-filter-delete-button',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './styles/filter-shared.scss',
  template: `
    <button class='delete' (click)='action.emit()'>
      <span id='icon' class='material-icons-round'>close</span>
    </button>
  `
})
export class FilterDeleteButtonComponent {
  @Output() action = new EventEmitter<void>();
}
