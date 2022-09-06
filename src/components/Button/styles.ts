import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type StyledButtonProps = Pick<ButtonProps, 'variant'>

const modifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.blackHover};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border-color: ${theme.colors.black};

    &:hover {
      color: ${theme.colors.blackHover};
      border-color: ${theme.colors.blackHover};
    }
  `,
  ghost: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.shapeLight};
    color: ${theme.colors.black};

    &:hover {
      background-color: ${theme.colors.shape};
    }
  `
}

export const Wrapper = styled.button<StyledButtonProps>`
  ${({ theme, variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    line-height: 1;

    border: 2px solid transparent;
    border-radius: 10px;
    padding: 1.2rem 2rem;
    cursor: pointer;

    transition: ${`all ${theme.transitions.new}`};

    ${variant && modifiers[variant](theme)}
  `}
`
