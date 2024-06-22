import { Meta, StoryObj } from '@storybook/angular';
import { BackButtonComponent } from './back-button.component';

const meta: Meta<BackButtonComponent> = {
  component: BackButtonComponent,
  title: 'UI/Buttons/Back Button',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      title: 'label',
      type: 'string',
      defaultValue: 'back',
      description: 'Button label'
    },
    color: {
      type: 'string',
      defaultValue: 'primary',
      description: 'Button color',
      control: 'inline-radio',
      options: ['primary', 'secondary']
    },
    action: {
      description: 'Action on click ```Event Emitter<void>```'
    }
  }
};
export default meta;
type Story = StoryObj<BackButtonComponent>;

export const Default: Story = {
  args: {
    color: 'primary'
  }
};
