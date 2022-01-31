import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.white};
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;

  background-color: ${theme.colors.black};
  border: none;
  border-radius: 10px;
  padding: 1.2rem 2rem;
  cursor: pointer;

  will-change: background-color;
  transition: ${theme.transitions.default};

  &:hover {
    background-color: ${theme.colors.blackHover};
  }
`
