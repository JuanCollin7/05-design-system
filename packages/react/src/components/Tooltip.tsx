import { ComponentProps, ReactNode, useState } from 'react'
import { styled } from '../styles'

const TooltipContainer = styled('div', {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$xs',
  color: '$gray100',
  fontSize: '$sm',
  fontFamily: '$default',
  position: 'absolute',
  bottom: 'calc(100% + 14px)',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'max-content',
  maxWidth: '300px',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  textAlign: 'center',

  '&::before': {
    content: '',
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid $gray900',
  },
})

const TooltipTrigger = styled('div', {
  position: 'relative',
  display: 'inline-block',
})

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content: string
  children: ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <TooltipTrigger
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <TooltipContainer {...props}>{content}</TooltipContainer>}
    </TooltipTrigger>
  )
}

Tooltip.displayName = 'Tooltip'
