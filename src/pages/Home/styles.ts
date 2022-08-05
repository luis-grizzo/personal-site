import styled, { css } from 'styled-components'

export const Page = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: calc(40% - 2.5rem) calc(60% - 2.5rem);
    align-items: center;
    gap: 5rem;

    height: 100%;
    width: 100%;
    padding: 2.5rem 0 14.5rem;
    overflow: hidden;

    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      grid-template-columns: 1fr;

      padding: 2.5rem 0;

      [class*='title'] {
        font-size: 5.8rem;
      }

      [class*='description'] {
        line-height: normal;
      }
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5rem;

    width: 100%;

    .w__title {
      font-size: 7.2rem;
      font-weight: 300;

      .wt__highlight {
        font-weight: 700;
      }
    }

    .w__description {
      font-size: 2rem;
      color: ${theme.colors.text};

      .wd__link {
        font-weight: 700;
        color: ${theme.colors.primary};

        will-change: color;
        transition: ${`color ${theme.transitions.new}`};

        &:hover {
          color: ${theme.colors.primaryHover};
        }
      }
    }

    .w__button-wrapper {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  `}
`
export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    overflow: hidden;

    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      max-height: 35rem;
    }

    &::before {
      display: flex;

      position: absolute;
      content: '';
      width: 100%;
      height: 75%;
      border-radius: 2rem;
      background: ${theme.colors.primary};
      z-index: -1;
    }

    .c__image {
      height: 100%;
    }
  `}
`
