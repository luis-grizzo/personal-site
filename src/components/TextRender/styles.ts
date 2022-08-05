import styled, { css } from 'styled-components'

type StyledTextFadeTop = {
  isTopScroll: boolean
}

type StyledTextFadeBottom = {
  isFullScrolled: boolean
}

const textFadeModifiers = {
  desactive: () => css`
    opacity: 0;
    visibility: hidden;
  `
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;

  height: 100%;
  overflow: hidden;
`

export const TextFadeTop = styled.div<StyledTextFadeTop>`
  ${({ theme, isTopScroll }) => css`
    position: absolute;
    top: 0;
    left: 0;

    height: 25%;
    width: calc(100% - 1.6rem);
    background-image: ${`linear-gradient(to bottom, ${theme.colors.background}, transparent)`};
    transition: ${`opacity ${theme.transitions.new}, visibility ${theme.transitions.new}`};

    ${isTopScroll && textFadeModifiers.desactive()}
  `}
`

export const TextFadeBottom = styled.div<StyledTextFadeBottom>`
  ${({ theme, isFullScrolled }) => css`
    position: absolute;
    bottom: 0;
    left: 0;

    height: 25%;
    width: calc(100% - 1.6rem);
    background-image: ${`linear-gradient(to top, ${theme.colors.background}, transparent)`};
    transition: ${`opacity ${theme.transitions.new}, visibility ${theme.transitions.new}`};

    ${isFullScrolled && textFadeModifiers.desactive()}
  `}
`

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;

    overflow: auto;

    .w__text {
      font-size: 2rem;
      line-height: normal;
      color: ${theme.colors.text};

      .wt__highlight {
        font-weight: bold;
        color: ${theme.colors.primary};
        transition: ${`color ${theme.transitions.new}`};

        &:hover {
          color: ${theme.colors.primaryHover};
        }
      }
    }
  `}
`
