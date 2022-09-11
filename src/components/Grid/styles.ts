import styled, { css } from 'styled-components'

type StyledFadeLeft = {
  isFullLeftScroll: boolean
}

type StyledFadeRight = {
  isFullRightScroll: boolean
}

const fadeModifiers = {
  desactive: () => css`
    opacity: 0;
    visibility: hidden;
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    position: relative;

    height: 100%;

    // Configuração para telas mobile & tablets - Tela < 1024px
    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      overflow: hidden;
    }
  `}
`

export const FadeLeft = styled.div<StyledFadeLeft>`
  ${({ theme, isFullLeftScroll }) => css`
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 15%;
    background-image: ${`linear-gradient(to right, ${theme.colors.background}, transparent)`};
    transition: ${`opacity ${theme.transitions.new}, visibility ${theme.transitions.new}`};

    ${isFullLeftScroll && fadeModifiers.desactive()}
  `}
`

export const FadeRight = styled.div<StyledFadeRight>`
  ${({ theme, isFullRightScroll }) => css`
    position: absolute;
    top: 0;
    right: 0;

    height: 100%;
    width: 15%;
    background-image: ${`linear-gradient(to left, ${theme.colors.background}, transparent)`};
    transition: ${`opacity ${theme.transitions.new}, visibility ${theme.transitions.new}`};

    ${isFullRightScroll && fadeModifiers.desactive()}
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 2.5rem;

    width: 100%;
    height: 100%;

    // Configuração para telas mobile & tablets - Tela < 1024px
    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      grid-template-columns: repeat(6, auto);

      width: 100%;
      overflow-y: hidden;

      .g__item {
        width: 15rem !important;
        aspect-ratio: 1/1;
      }
    }

    .g__item {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      border-radius: 2rem;
      color: ${theme.colors.black};
      background-color: ${theme.colors.shape};
      cursor: pointer;

      will-change: background-color;
      transition: ${`background-color ${theme.transitions.new}`};

      &:hover {
        background-color: ${theme.colors.primary};
      }
    }
  `}
`
