import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerMessageEnum } from '../../core/enums/logger-message.enum';

@Component({
  selector: 'tm-ui-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  /**
   * @label message
   * @description Toast message.
   * */
  @Input({ required: true }) message: string;
  /**
   * @label type
   * @description Toast type.
   * @typeParam enum
   * @defaultValue LoggerMessageEnum.Info
   * @remarks
   * See {@link LoggerMessageEnum| type} of toast types.
   * */
  @Input() type: LoggerMessageEnum = LoggerMessageEnum.Info;
  /**
   * @label closeLoggerClick
   * @description Action after close toast.
   * @return function<void>
   * */
  @Output() closeLoggerClick = new EventEmitter<void>();

  public loggerType = LoggerMessageEnum;

  public handleClose(): void {
    this.closeLoggerClick.emit();
  }
}
