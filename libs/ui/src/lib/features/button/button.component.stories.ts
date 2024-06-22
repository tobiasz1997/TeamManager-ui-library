import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { Observable } from 'rxjs';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'UI/Buttons/Button',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      title: 'label **Required**',
      type: 'string',
      description: 'Button label **Required**'
    },
    color: {
      type: 'string',
      defaultValue: 'primary',
      description: 'Button color',
      control: 'inline-radio',
      options: ['primary', 'secondary', 'transparent']
    },
    size: {
      type: 'string',
      defaultValue: 'default',
      description: 'Button size',
      control: 'inline-radio',
      options: ['small', 'default', 'large']
    },
    type: {
      type: 'string',
      defaultValue: 'button',
      description: 'Button type',
      control: 'inline-radio',
      options: ['button', 'submit', 'reset']
    },
    loading$: {
      description: 'Loader ```Observable<boolean>```'
    },
    action: {
      description: 'Action on click ```Event Emitter<void>```'
    }
  }
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    label: 'test',
    color: 'primary',
    size: 'default',
    type: 'button',
    disabled: false
  }
};

export const Loading: Story = {
  args: {
    label: 'test',
    color: 'primary',
    size: 'default',
    type: 'button',
    disabled: false,
    loading$: new Observable<boolean>((observer) => {
      setTimeout(() => observer.next(true), 1000);
      setTimeout(() => observer.complete(), 3000);
    })
  }
};
