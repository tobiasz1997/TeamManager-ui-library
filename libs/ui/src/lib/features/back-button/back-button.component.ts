import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

type buttonColor = 'primary' | 'secondary';

@Component({
  selector: 'tm-ui-back-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent {
  /**
   * @label label
   * @description Label for button.
   * @defaultValue back
   * */
  @Input() label = 'back';
  /**
   * @label color
   * @description Button color.
   * @typeParam type
   * @defaultValue primary
   * @remarks
   * See {@link buttonColor| color} of button colors.
   * */
  @Input() color: buttonColor = 'primary';
  /**
   * @label action
   * @description Action after click button.
   * @return function<void>
   * */
  @Output() action = new EventEmitter<void>();

  public handleClick(): void {
    this.action.emit();
  }
}
