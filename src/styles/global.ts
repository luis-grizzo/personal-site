import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      ::-moz-selection {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
      }

      ::selection {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
      }
    }

    html {
      font-size: 62.5%;
      background-color: ${theme.colors.background};
      scroll-behavior: smooth;
    }

    body,
    button,
    input {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 400;
      line-height: 1;
    }

    *,
    ::before,
    ::after {
      border-width: 0;
      border-style: solid;
      border-color: currentColor;
    }

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    ol,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
    }

    button {
      cursor: pointer;
    }

    button:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }

    a {
      text-decoration: none;
    }

    .custom-scroll {
      overflow-y: overlay;
      overflow-x: hidden;

      padding-right: 1.6rem;

      ::-webkit-scrollbar {
        width: 0.8rem;
      }

      ::-webkit-scrollbar-track {
        opacity: 0;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.text};
        border-radius: 1rem;

        &:hover {
          background-color: ${theme.colors.textHover};
        }
      }
    }
  `}
`
export default GlobalStyle
