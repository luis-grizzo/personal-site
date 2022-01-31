import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;

  .w__title {
    font-size: 7.2rem;
    font-weight: 300;

    .wt__highlight {
      font-weight: 700;
    }
  }

  .w__description {
    color: ${theme.colors.text};
  }

  .w__links-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5rem;

    width: 100%;
    overflow-x: auto;
    cursor: grab;

    .wlw__item {
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 12rem;
      height: 12rem;
      background-color: ${theme.colors.shape};
      border-radius: 2rem;
      cursor: pointer;

      will-change: background-color;
      transition: ${theme.transitions.default};

      &:hover {
        background-color: ${theme.colors.primary};
      }
    }
  }
`
