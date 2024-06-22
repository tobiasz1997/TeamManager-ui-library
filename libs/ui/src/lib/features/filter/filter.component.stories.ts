import type { Meta, StoryObj } from '@storybook/angular';
import { FilterComponent } from './filter.component';

const meta: Meta<FilterComponent> = {
  component: FilterComponent,
  title: 'UI/Filter',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      title: 'Data **Required**',
      description: 'Array of all filtered options ```Array<IFilterItem>```'
    }
  }
};
export default meta;
type Story = StoryObj<FilterComponent>;

export const Default: Story = {
  parameters: {
    angularRouter: { active: '/test' }
  },
  args: {
    data: [
      {
        name: 'startDate',
        placeholder: 'Start Date',
        type: 'date'
      },
      {
        name: 'endDate',
        placeholder: 'End Date',
        type: 'date'
      },
      {
        name: 'company',
        placeholder: 'Company',
        type: 'select',
        options: [
          { label: 'Microsoft', value: '1' },
          { label: 'Google', value: '2' },
          { label: 'Apple', value: '3' }
        ]
      }
    ]
  }
};
