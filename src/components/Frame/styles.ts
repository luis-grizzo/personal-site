import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    overflow: hidden;

    // Configuração para telas mobile & tablets - Tela < 1024px
    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      height: 35rem;
    }

    &::before {
      content: '';

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;

      width: 100%;
      height: 65%;
      border-radius: 2rem;
      background: ${theme.colors.primary};
      z-index: -1;
    }

    .c__image {
      position: absolute;

      height: 100%;
    }
  `}
`
