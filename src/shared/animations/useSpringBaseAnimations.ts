import { UseSpringProps } from 'react-spring'

export const useSpringHorizontalAnimation: UseSpringProps = {
  from: {
    opacity: 0,
    x: 100,
    scale: 0.95
  },
  to: {
    opacity: 1,
    x: 0,
    scale: 1
  }
}

export const useSpringVerticalAnimation: UseSpringProps = {
  from: {
    opacity: 0,
    y: 100,
    scale: 0.95
  },
  to: {
    opacity: 1,
    y: 0,
    scale: 1
  }
}
