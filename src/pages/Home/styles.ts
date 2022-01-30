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

    .wd__link {
      font-weight: 700;
      color: ${theme.colors.primary};

      will-change: color;
      transition: ${theme.transitions.default};

      &:hover {
        color: ${theme.colors.primaryHover}
      }
    }
  }
`
