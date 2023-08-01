import { UseTrailProps, easings } from 'react-spring'

export const useTrailHorizontalAnimation: UseTrailProps = {
  from: {
    opacity: 0,
    x: 100,
    scale: 0.95
  },
  to: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  config: {
    duration: 200,
    easing: easings.easeOutCubic
  }
}

export const useTrailVerticalAnimation: UseTrailProps = {
  from: {
    opacity: 0,
    y: 100,
    scale: 0.95
  },
  to: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  config: {
    duration: 200,
    easing: easings.easeOutCubic
  }
}
