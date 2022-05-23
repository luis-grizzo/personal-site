import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 2.5rem;

    width: fit-content;
    margin: 0 auto;

    @media screen and (max-width: ${`${theme.mediaquerys.laptopStart}px`}) {
      grid-template-columns: repeat(6, auto);
      overflow-y: hidden;
      width: 100%;
    }

    .g__item {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 15rem;
      aspect-ratio: 1/1;
      color: ${theme.colors.black};
      background-color: ${theme.colors.shape};
      border-radius: 2rem;
      cursor: pointer;

      will-change: background-color;
      transition: background-color 300ms ease;

      &:hover {
        background-color: ${theme.colors.primary};
      }
    }
  `}
`
