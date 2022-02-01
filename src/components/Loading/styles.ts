import styled, { css, keyframes } from 'styled-components'

const rotateHue = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 100vw;
    height: 100vh;

    animation: 1000ms ${rotateHue} linear infinite;

    &::after {
      content: '';

      position: absolute;
      z-index: -1;

      width: 10rem;
      height: 10rem;

      border-radius: 50%;
      background-color: ${theme.colors.white};
      border: 5px solid ${theme.colors.primary};
    }
  `}
`
