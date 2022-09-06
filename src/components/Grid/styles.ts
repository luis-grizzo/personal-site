import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 2.5rem;

    width: 100%;

    // Configuração para telas mobile & tablets - Tela < 1024px
    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      grid-template-columns: repeat(6, auto);
      overflow-y: hidden;
      width: 100%;

      .g__item {
        width: 15rem !important;
      }
    }

    .g__item {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 2rem;
      color: ${theme.colors.black};
      background-color: ${theme.colors.shape};
      cursor: pointer;

      will-change: background-color;
      transition: ${`background-color ${theme.transitions.new}`};

      &:hover {
        background-color: ${theme.colors.primary};
      }
    }
  `}
`
