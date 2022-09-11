import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row-reverse;
    gap: 2.5rem;

    position: relative;

    height: 100%;

    // Configuração para telas mobile & tablets - Tela < 1024px
    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      flex-direction: column;

      height: 55rem !important;
      overflow: hidden;

      &:before {
        content: '';

        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 4.5rem;
        background-image: ${`linear-gradient(to top, ${theme.colors.background}, transparent)`};

        z-index: 9;
      }

      .dots-container {
        flex-direction: row !important;
      }
    }

    .items-container {
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      height: 100%;
      width: 100%;

      .ic__card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        position: absolute;

        text-align: left;
        height: 100%;
        width: 100%;
        padding: 5rem;
        border-radius: 2rem;
        background-color: ${theme.colors.shape};
        transition: ${`background-color ${theme.transitions.new}`};

        z-index: 0;

        &:hover,
        &:focus {
          background-color: ${theme.colors.primary};

          .icc__content,
          .iccc__description {
            color: ${theme.colors.black} !important;
          }
        }

        .icc__icon {
          align-self: flex-end;

          color: ${theme.colors.black};
        }

        .icc__content {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;

          .iccc__name {
            font-size: 3rem;
            font-weight: 700;
            color: ${theme.colors.black};
          }

          .iccc__description {
            color: ${theme.colors.text};
            transition: ${`color ${theme.transitions.new}`};
          }
        }
      }
    }

    .dots-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2.5rem;

      z-index: 9;

      .dc__dot {
        width: 2rem;
        aspect-ratio: 1/1;
        border-radius: 50%;

        background-color: ${theme.colors.shape};
        transition: ${`background-color ${theme.transitions.new}`};

        &:hover:not(.dc__dot--active) {
          background-color: ${theme.colors.shapeHover};
        }

        &--active {
          background-color: ${theme.colors.primary};
          pointer-events: none;
        }
      }
    }
  `}
`
