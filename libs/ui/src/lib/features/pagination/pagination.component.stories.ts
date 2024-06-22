import { Meta, StoryObj } from '@storybook/angular';
import { PaginationComponent } from './pagination.component';

const meta: Meta<PaginationComponent> = {
  component: PaginationComponent,
  title: 'UI/Pagination',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    itemCount: {
      title: 'Item count **Required**',
      type: 'number',
      description: 'Number of elements **Required**'
    },
    page: {
      title: 'Page **Required**',
      type: 'number',
      description: 'Current page of elements **Required**'
    },
    pageSize: {
      title: 'Page size **Required**',
      type: 'number',
      description: 'Number of displayed elements **Required**'
    },
    setPage: {
      description: 'Action that return selected page ```Event Emitter<number>```'
    }
  }
};
export default meta;
type Story = StoryObj<PaginationComponent>;

export const Default: Story = {
  parameters: {
    angularRouter: { active: '/test' }
  },
  args: {
    page: 1,
    pageSize: 5,
    itemCount: 20
  }
};
