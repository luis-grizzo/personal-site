import styled, { css } from 'styled-components'

type StyledImageProps = {
  active?: boolean
}

const imageModifiers = {
  active: () => css`
    opacity: 1;
    visibility: visible;
    display: block;
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    position: relative;

    .w__image-container {
      display: grid;
      grid-template-columns: repeat(3, 100%);
      grid-template-rows: 1fr;

      width: 100%;
      overflow: hidden;

      .wic__image {
        width: 100%;
        border-radius: 2rem;
      }
    }
  `}
`

export const Image = styled.img<StyledImageProps>`
  ${({ theme, active }) => css`
    /* opacity: 0;
    visibility: hidden;
    display: none; */

    width: 100%;
    border-radius: 2rem;

    ${active && imageModifiers.active()}
  `}
`
