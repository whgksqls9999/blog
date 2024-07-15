import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    className: { control: 'text' },
    appName: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    appName: 'Example App',
  },
};
