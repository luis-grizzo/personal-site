import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;

  height: 100%;

  .w__title {
    font-size: 7.2rem;
    font-weight: 300;

    .wt__highlight {
      font-weight: 700;
    }
  }

  .w__text {
    font-size: 2rem;
    line-height: normal;
    color: ${theme.colors.text};
  }
`
