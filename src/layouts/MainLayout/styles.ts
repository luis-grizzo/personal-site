import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 90vw;
    max-width: 128rem;
    margin: 0 auto;
    overflow: hidden;

    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      height: auto;
      min-height: 100vh;
    }

    .w__navbar {
      display: flex;
      align-items: center;
      gap: 5rem;

      width: 100%;
      padding: 2.5rem 0;

      .wn__link-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2.5rem;

        width: 100%;

        .wnlw__link {
          display: flex;
          align-items: center;
          justify-content: center;

          color: ${theme.colors.black};

          will-change: color;
          transition: ${`color ${theme.transitions.new}`};

          &:hover {
            color: ${theme.colors.blackHover};
          }
        }

        .wnlw__divider {
          width: 0.2rem;
          height: 3rem;
          background-color: ${theme.colors.black};
        }

        .wnlw__menu-button {
          display: flex;
          align-items: center;
          justify-content: center;

          background-color: transparent;
          border: none;
          color: ${theme.colors.black};
          cursor: pointer;
          padding: 0;

          will-change: color;
          transition: ${`color ${theme.transitions.new}`};

          &:hover {
            color: ${theme.colors.blackHover};
          }
        }
      }
    }
  `}
`
