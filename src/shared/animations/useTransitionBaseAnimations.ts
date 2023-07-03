export const useTransitionHorizontalAnimation = {
  from: {
    opacity: 0,
    transform: 'translateX(100px)',
    scale: 0.95
  },
  enter: {
    opacity: 1,
    transform: 'translateX(0)',
    scale: 1
  },
  leave: {
    opacity: 0,
    transform: 'translateX(100px)',
    scale: 0.95
  }
}

export const useTransitionVerticalAnimation = {
  from: {
    opacity: 0,
    transform: 'translateY(100px)',
    scale: 0.95
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0)',
    scale: 1
  },
  leave: {
    opacity: 0,
    transform: 'translateY(100px)',
    scale: 0.95
  }
}
