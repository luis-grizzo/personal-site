import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    position: relative;

    height: 100%;

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

    // Configuração para telas mobile & tablets - Tela < 1024px
    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      flex-direction: column;

      height: 55rem !important;
      overflow: hidden;
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

        z-index: 0;

        // Configuração para telas mobile & tablets - Tela < 1024px
        @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
          padding: 2.5rem;
        }

        .icc__user {
          align-self: flex-end;

          display: flex;
          align-items: center;
          gap: 0.8rem;

          .iccu__image {
            width: 5rem;
            border-radius: 50%;
          }

          .iccu__name {
            font-weight: bold;
            color: ${theme.colors.black};
          }
        }

        .icc__content {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;

          .iccc__heading {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;

            .iccch__name {
              font-size: 3.6rem;
              font-weight: 700;
              color: ${theme.colors.black};
            }

            .iccch__tags {
              display: flex;
              flex-flow: wrap;
              align-items: center;
              gap: 0.8rem;

              .icccht__tag {
                display: flex;
                align-items: center;
                gap: 0.4rem;

                padding: 0 0.6rem;
                border-radius: 0.6rem;

                background-color: ${theme.colors.black};

                .icccht__icon,
                .icccht__text {
                  color: ${theme.colors.shape};
                }

                .icccht__text {
                  font-size: 1.6rem;
                }
              }
            }

            .iccct__links {
              display: flex;
              align-items: center;
              gap: 0.8rem;

              .iccctl__link {
                color: ${theme.colors.primary};

                will-change: color;
                transition: ${`color ${theme.transitions.default}`};

                &:hover {
                  color: ${theme.colors.primaryHover};
                }
              }

              .iccctl__dot {
                width: 0.8rem;
                aspect-ratio: 1/1;

                border-radius: 50%;

                background-color: ${theme.colors.black};
              }
            }
          }

          .iccc__description {
            color: ${theme.colors.text};
          }
        }
      }
    }

    .dots-container {
      display: flex;
      justify-content: center;
      gap: 2.5rem;

      z-index: 9;

      .dc__dot {
        width: 2rem;
        aspect-ratio: 1/1;
        border-radius: 50%;

        background-color: ${theme.colors.black};
        transition: ${`background-color ${theme.transitions.default}`};

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
