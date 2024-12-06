import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,

  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const WithButton: StoryObj<TooltipProps> = {
  args: {
    children: <Button>Hover me</Button>,
    content: 'This tooltip appears on button hover',
  },
}

export const CustomContent: StoryObj<TooltipProps> = {
  args: {
    children: <span>Hover over this text</span>,
    content: 'You can display helpful information here',
  },
}
