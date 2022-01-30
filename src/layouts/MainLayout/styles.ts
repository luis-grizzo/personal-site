import styled from 'styled-components'

import { theme } from '../../styles/theme'

import portrait from '../../assets/portrait.png'

export const Wrapper = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-template-rows: auto 1fr;

  height: 100vh;
  width: 100vw;

  .w__navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 3rem 0;

    .wnc__links {
      display: flex;
      align-items: center;
      gap: 2rem;

      .wncl__link {
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

      .wncl__menu-button {
        display: none; //flex;
        align-items: center;
        justify-content: center;

        background-color: transparent;
        border: none;
        color: ${theme.colors.black};
        cursor: pointer;

        will-change: color;
        transition: ${theme.transitions.default};

        &:before {
          content: '';

          width: .2rem;
          height: 3rem;
          background-color: ${theme.colors.black};
          margin-right: 2rem;
        }

        &:hover {
          color: ${theme.colors.blackHover};
        }
      }
    }
  }

  .w__main-container {
    display: grid;
    grid-template-columns: calc(60% - 3rem) 40%;
    grid-auto-rows: auto;
    align-items: center;
    gap: 3rem;

    height: 100%;
    padding-bottom: 5rem;

    .wmc__page {
      font-size: 2rem;
      color: ${theme.colors.black};
    }

    .wmc__aside {
      display: flex;
      align-items: flex-end;
      gap: 1rem;

      height: 100%;
      max-height: 60rem;

      .wmca__techs-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        .wmcatw__tech {
          width: 5rem;
        }
      }

      .wmca__portrait {
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
`
