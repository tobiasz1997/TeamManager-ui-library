import { Meta, StoryObj } from '@storybook/angular';
import { ToastComponent } from './toast.component';
import { LoggerMessageEnum } from '../../core/enums/logger-message.enum';

const meta: Meta<ToastComponent> = {
  component: ToastComponent,
  title: 'UI/Toast',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      title: 'Message **Required**',
      type: 'string',
      description: 'Toast message **Required**'
    },
    type: {
      type: 'number',
      defaultValue: LoggerMessageEnum.Info,
      description: 'Toast type',
      control: 'inline-radio',
      options: ['Info', 'Error', 'Warning', 'Success'],
      mapping: {
        Info: LoggerMessageEnum.Info,
        Error: LoggerMessageEnum.Error,
        Warning: LoggerMessageEnum.Warning,
        Success: LoggerMessageEnum.Success
      }
    },
    closeLoggerClick: {
      description: 'Action on close toast ```Event Emitter<void>```'
    }
  }
};
export default meta;
type Story = StoryObj<ToastComponent>;

export const Success: Story = {
  args: {
    message: 'Success message',
    type: LoggerMessageEnum.Success
  }
};

export const Error: Story = {
  args: {
    message: 'Success message',
    type: LoggerMessageEnum.Error
  }
};

export const Warning: Story = {
  args: {
    message: 'Success message',
    type: LoggerMessageEnum.Warning
  }
};

export const Info: Story = {
  args: {
    message: 'Success message',
    type: LoggerMessageEnum.Info
  }
};
