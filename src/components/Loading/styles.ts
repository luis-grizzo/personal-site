import styled, { css, keyframes } from 'styled-components'

import { LoadingProps } from '.'

const wrapperModifiers = {
  isChildren: () => css`
    width: 100% !important;
    height: 100% !important;
  `
}

const rotateHue = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
`

const indeterminateAnimation = keyframes`
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
`

export const Wrapper = styled.div<LoadingProps>`
  ${({ theme, isChildren }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    animation: 2000ms ${rotateHue} linear infinite;

    ${isChildren && wrapperModifiers.isChildren()}

    .w__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.5rem;

      .wc__logo {
        height: 10rem;
        width: 6.7rem;
      }

      .wc__progress-bar {
        width: 100%;
        height: 0.8rem;
        overflow: hidden;
        background-color: ${theme.colors.primaryHover};
        border-radius: 2rem;

        .wcpb__bar {
          width: 100%;
          height: 100%;
          background-color: ${theme.colors.primary};
          border-radius: 2rem;

          animation: ${indeterminateAnimation} 1000ms infinite linear;
          transform-origin: 0% 50%;
        }
      }
    }
  `}
`
