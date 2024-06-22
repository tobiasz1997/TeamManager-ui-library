import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

type linkColor = 'primary' | 'secondary' | 'tertiary';
type linkSize = 'small' | 'default' | 'large';

@Component({
  selector: 'tm-ui-link-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkButtonComponent {
  /**
   * @label label
   * @description Label for button link.
   * */
  @Input({ required: true }) label: string;
  /**
   * @label color
   * @description Button link color.
   * @typeParam type
   * @defaultValue primary
   * @remarks
   * See {@link linkColor| color} of link colors.
   * */
  @Input() color: linkColor = 'primary';
  /**
   * @label size
   * @description Button link size.
   * @typeParam type
   * @defaultValue default
   * @remarks
   * See {@link linkSize| size} of link sizes.
   * */
  @Input() size: linkSize = 'default';
  /**
   * @label disabled
   * @description Prop for disable link.
   * @typeParam boolean
   * @defaultValue false
   * */
  @Input() disabled = false;
  /**
   * @label action
   * @description Action after click link.
   * @return function<void>
   * */
  @Output() action = new EventEmitter<void>();

  public handleClick(): void {
    !this.disabled && this.action.emit();
  }
}
