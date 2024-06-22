import { Meta, StoryObj } from '@storybook/angular';
import { LinkButtonComponent } from './link-button.component';

const meta: Meta<LinkButtonComponent> = {
  component: LinkButtonComponent,
  title: 'UI/Buttons/Link Button',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      title: 'label **Required**',
      type: 'string',
      description: 'Button link label **Required**'
    },
    color: {
      type: 'string',
      defaultValue: 'primary',
      description: 'Button link color',
      control: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary']
    },
    size: {
      type: 'string',
      defaultValue: 'default',
      description: 'Button link size',
      control: 'inline-radio',
      options: ['small', 'default', 'large']
    },
    action: {
      description: 'Action on click ```Event Emitter<void>```'
    }
  }
};
export default meta;
type Story = StoryObj<LinkButtonComponent>;

export const Default: Story = {
  args: {
    label: 'test',
    color: 'primary',
    size: 'default',
    disabled: false
  }
};
