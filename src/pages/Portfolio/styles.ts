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

      .c__title {
        font-size: 5.8rem !important;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5rem;

      width: 100%;
      padding: 2.5rem 0;

      .c__title {
        font-size: 7.2rem;
        font-weight: 300;

        .ct__highlight {
          font-weight: 700;
        }
      }

      .c__description {
        font-size: 2rem;
        color: ${theme.colors.text};
        line-height: normal;

        .cd__link {
          color: ${theme.colors.primary};

          will-change: color;
          transition: ${`color ${theme.transitions.default}`};

          &:hover {
            color: ${theme.colors.primaryHover};
          }
        }
      }

      .c__buttons-wrapper {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
      }
    }

    /* .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      grid-auto-rows: 1fr;
      gap: 2.5rem;

      padding: 0 0 2.5rem;

      // Configuração para telas mobile & tablets - Tela < 1024px
      @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
        grid-auto-rows: unset;
        grid-template-columns: repeat(auto-fill, 10rem);
        grid-template-rows: 1fr;

        width: 100%;
      }

      .g__card {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        padding: 5rem;
        border-radius: 2rem;
        background-color: ${theme.colors.shape};
        transition: ${`background-color ${theme.transitions.default}`};

        &:hover {
          background-color: ${theme.colors.primary};

          .gc__description {
            color: ${theme.colors.black};
          }
        }

        .gc__name {
          font-size: 3rem;
          font-weight: 700;
          color: ${theme.colors.black};
        }

        .gc__description {
          color: ${theme.colors.text};
          transition: ${`color ${theme.transitions.default}`};
        }
      }
    } */
  `}
`
