import { keyframes, styled } from '../../styles'

const slideIn = keyframes({
  from: {
    transform: 'translateY(100%)',
    opacity: 0,
  },
  to: {
    transform: 'translateY(0)',
    opacity: 1,
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
    opacity: 1,
  },
  to: {
    transform: 'translateY(100%)',
    opacity: 0,
  },
})

export const ToastContainer = styled('div', {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
  padding: '$3 $5',
  background: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  animation: `${slideIn} 200ms ease-out`,

  '&[data-state="closed"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})

export const ToastHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$3',
})

export const ToastTitle = styled('div', {
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const ToastDescription = styled('div', {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const CloseButton = styled('button', {
  all: 'unset',
  color: '$gray200',
  cursor: 'pointer',
  lineHeight: 0,
})
