import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5rem;

    max-height: 100%;
    overflow: hidden;

    .w__title {
      font-size: 7.2rem;
      font-weight: 300;

      .wt__highlight {
        font-weight: 700;
      }
    }

    .w__text-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2.5rem;

      height: 100%;

      .wtw__text {
        font-size: 2rem;
        line-height: normal;
        color: ${theme.colors.text};

        .wt__highlight {
          font-weight: bold;
          color: ${theme.colors.primary};
          transition: ${`color ${theme.transitions.new}`};

          &:hover {
            color: ${theme.colors.primaryHover};
          }
        }
      }
    }

    .w__button-wrapper {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  `}
`
