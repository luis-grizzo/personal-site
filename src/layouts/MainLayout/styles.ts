import styled, { css } from 'styled-components'

import portrait from '../../assets/portrait.png'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5rem;

    height: 100vh;
    width: 90vw;
    max-width: 128rem;
    margin: 0 auto;
    padding: 5rem 0;
    overflow: hidden;

    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      gap: 3rem;

      height: auto;
      padding: 3rem 0;
      overflow: auto;
    }

    .w__navbar {
      display: flex;
      align-items: center;
      gap: 4rem;

      width: 100%;

      .wn__link-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2rem;

        width: 100%;

        .wnlw__link {
          display: flex;
          align-items: center;
          justify-content: center;

          color: ${theme.colors.black};

          will-change: color;
          transition: ${theme.transitions.default};

          &:hover {
            color: ${theme.colors.blackHover};
          }
        }

        .wnl__divider {
          width: .2rem;
          height: 3rem;
          background-color: ${theme.colors.black};
        }

        .wnl__menu-button {
          display: flex;
          align-items: center;
          justify-content: center;

          background-color: transparent;
          border: none;
          color: ${theme.colors.black};
          cursor: pointer;
          padding: 0;

          will-change: color;
          transition: ${theme.transitions.default};

          &:hover {
            color: ${theme.colors.blackHover};
          }
        }
      }
    }

    .w__main {
      display: flex;
      align-items: center;
      gap: 5rem;

      height: 100%;
      width: 100%;
      overflow: hidden;

      @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
        flex-direction: column-reverse;
        justify-content: flex-end;

        overflow: visible;
      }

      .wm__page {
        display: flex;
        align-items: center;

        width: 60%;
        height: 100%;
        overflow: auto;

        [class*='description'] {
          line-height: normal;
        }

        @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
          height: auto;
          width: 100%;
          overflow: visible;

          [class*='title'] {
            font-size: 5.8rem;
          }
        }

        ::-webkit-scrollbar {
          opacity: 0;
          width: 8px;
        }


        &:hover {
          ::-webkit-scrollbar {
            opacity: 1;
          }

          ::-webkit-scrollbar-track {
            opacity: 0;
          }

          ::-webkit-scrollbar-thumb {
            background-color: ${theme.colors.text};
            border-radius: 1rem;

            &:hover {
              background-color: ${theme.colors.textHover};
            }
          }
        }

      }

      .wm__aside {
        display: flex;
        align-items: flex-end;
        gap: 1rem;

        height: 100%;
        max-height: 60rem;
        width: 40%;

        @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
          width: 100%;
        }

        .wma__techs-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;

          .wmatw__tech {
            width: 5rem;
          }
        }

        .wma__portrait {
          display: flex;
          align-items: flex-end;

          height: 100%;
          width: 100%;

          background-image: url(${portrait});
          background-size: cover;
          background-position-x: 45%;
          background-repeat: no-repeat;

          border-radius: 50px;
          border-bottom-left-radius: 10px;
          overflow: hidden;

          @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
            height: 45rem;
          }

          &::before {
            content: '';
            width: 100%;
            height: calc(100% - 8rem);
            background-color: ${theme.colors.primary};
            z-index: -1;
            border-radius: inherit;
          }
        }
      }
    }
  `}
  }
`
