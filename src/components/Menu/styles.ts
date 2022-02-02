import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

import { MenuProps } from '.'

export type StyledWrapperProps = Pick<MenuProps, 'isOpen'>

export const Wrapper = styled.div<StyledWrapperProps>`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .w__content {
      z-index: 20;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 5rem;

      width: fit-content;
      max-width: 100vw;
      height: 100%;

      background-color: ${theme.colors.white};
      padding: 5rem;
      box-shadow: 12px 0px 24px 6px ${transparentize(0.8, theme.colors.black)};
      overflow: auto;

      .wc__close-button {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0;
        border: 0;
        background-color: transparent;
        color: ${theme.colors.black};
        cursor: pointer;

        will-change: color;
        transition: ${theme.transitions.default};

        &:hover {
          color: ${theme.colors.blackHover};
        }
      }

      .wc__item {
        font-weight: 300;
        font-size: 4.8rem;
        color: ${theme.colors.text};
        text-transform: uppercase;

        will-change: color;
        transition: ${theme.transitions.default};

        &:hover:not(.wc__item--active) {
          color: ${theme.colors.textHover};
        }

        &--active {
          color: ${theme.colors.black};
          font-weight: 700;
          cursor: default;
        }
      }
    }

    .w__overlay {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;

      width: 100vw;
      height: 100vh;
      backdrop-filter: blur(2px);
     }
  `}

`
