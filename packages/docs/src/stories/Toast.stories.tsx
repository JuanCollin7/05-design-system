import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@ignite-ui/react'
import { useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Abrir Toast</Button>
      {isOpen && (
        <Toast
          title={props.title}
          description={props.description}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default {
  title: 'Data Display/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const WithLongDescription: StoryObj<ToastProps> = {
  args: {
    description:
      'Esta é uma descrição mais longa para demonstrar como o Toast lida com textos maiores em seu conteúdo.',
  },
}
