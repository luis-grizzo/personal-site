import { darken, transparentize } from 'polished'

const index = Math.round(Math.random() * 10)

const primaryColors = [
  '#f44336',
  '#e91e63',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ff9800',
  '#ff5722'
]

export const theme = {
  colors: {
    primary: primaryColors[index],
    primaryHover: transparentize(0.3, primaryColors[index]),
    white: '#ffffff',
    black: '#212121',
    blackHover: transparentize(0.3, '#212121'),

    text: '#616161',
    textHover: transparentize(0.3, '#616161'),

    shape: '#e6e6e6',
    shapeLight: transparentize(0.3, '#e6e6e6'),
    shapeHover: darken(0.3, '#e6e6e6'),
    background: '#fafafa'
  },
  transitions: {
    default: '300ms ease'
  },
  mediaquerys: {
    laptopStart: 1024,
    tabletStart: 768
  }
} as const
