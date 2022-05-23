import styled, { css } from 'styled-components'

type StyledMoreTextEffect = {
  isFullScrolled: boolean
}

const modifiers = {
  isFullScrolled: () => css`
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

export const MoreTextEffect = styled.div<StyledMoreTextEffect>`
  ${({ theme, isFullScrolled }) => css`
    position: absolute;
    bottom: 0;

    height: 25%;
    width: 100%;
    background-image: ${`linear-gradient(to top, ${theme.colors.background}, transparent)`};
    transition: ${`opacity ${theme.transitions.new}, visibility ${theme.transitions.new}`};

    ${isFullScrolled && modifiers.isFullScrolled()}
  `}
`

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;

    overflow: auto;
    /* &::after {
      content: '';
      position: absolute;
      bottom: 0;

      width: 100%;
      height: 25%;

    } */

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
