import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SpinnerComponent } from '../spinner/spinner.component';

type buttonColor = 'primary' | 'secondary' | 'transparent';
type buttonSize = 'small' | 'default' | 'large';
type buttonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'tm-ui-button',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  /**
   * @label label
   * @description Label for button.
   * */
  @Input({ required: true }) label: string;
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
   * @label size
   * @description Button size.
   * @typeParam type
   * @defaultValue default
   * @remarks
   * See {@link buttonSize| size} of button sizes.
   * */
  @Input() size: buttonSize = 'default';
  /**
   * @label type
   * @description Button type.
   * @typeParam type
   * @defaultValue button
   * @remarks
   * See {@link buttonType| type} of button types.
   * */
  @Input() type: buttonType = 'button';
  /**
   * @label loading$
   * @description Observable for displaying a loader.
   * @typeParam Observable<boolean>
   * @return boolean
   * */
  @Input() loading$: Observable<boolean>;
  /**
   * @label disabled
   * @description Prop for disable button.
   * @typeParam boolean
   * @defaultValue false
   * */
  @Input() disabled = false;
  /**
   * @label action
   * @description Action after click button.
   * @return function<void>
   * */
  @Output() action = new EventEmitter<void>();

  public handleClick(): void {
    !this.disabled && this.action.emit();
  }
}
