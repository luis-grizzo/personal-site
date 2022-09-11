import { UseSpringProps } from 'react-spring'

export const useSpringHorizontalAnimation: UseSpringProps = {
  from: {
    opacity: 0,
    transform: 'translateX(100px)',
    scale: 0.95
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
    scale: 1
  }
}

export const useSpringVerticalAnimation: UseSpringProps = {
  from: {
    opacity: 0,
    transform: 'translateY(100px)',
    scale: 0.95
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
    scale: 1
  }
}
