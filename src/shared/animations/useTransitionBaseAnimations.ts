export const useTransitionHorizontalAnimation = {
  from: { opacity: 0, x: 100, scale: 0.95 },
  enter: { opacity: 1, x: 0, scale: 1 },
  leave: { opacity: 0, x: 100, scale: 0.95 }
}

export const useTransitionVerticalAnimation = {
  from: { opacity: 0, y: 100, scale: 0.95 },
  enter: { opacity: 1, y: 0, scale: 1 },
  leave: { opacity: 0, y: 100, scale: 0.95 }
}
