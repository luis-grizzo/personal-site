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

    // Configuração para telas mobile & tablets - Tela < 1024px
    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      grid-template-columns: 1fr;

      [class*='title'] {
        font-size: 5.8rem !important;
      }
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5rem;

      max-height: 100%;
      overflow: hidden;
    }

    .w__title {
      font-size: 7.2rem;
      font-weight: 300;

      .wt__highlight {
        font-weight: 700;
      }
    }

    .w__text-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2.5rem;

      height: 100%;

      .wtw__text {
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
    }

    .w__buttons-wrapper {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  `}
`
