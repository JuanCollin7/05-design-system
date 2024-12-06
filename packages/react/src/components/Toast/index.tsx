import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import {
  CloseButton,
  ToastContainer,
  ToastDescription,
  ToastHeader,
  ToastTitle,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  onClose: () => void
}

export function Toast({ title, description, onClose, ...props }: ToastProps) {
  const [isOpen, setIsOpen] = useState(true)

  function handleClose() {
    setIsOpen(false)
    setTimeout(onClose, 200) // espera a animação terminar
  }

  return (
    <ToastContainer {...props} data-state={isOpen ? 'open' : 'closed'}>
      <ToastHeader>
        <ToastTitle>{title}</ToastTitle>
        <CloseButton onClick={handleClose}>
          <X size={20} weight="bold" />
        </CloseButton>
      </ToastHeader>

      <ToastDescription>{description}</ToastDescription>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
