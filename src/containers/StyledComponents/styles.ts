import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body,
    html,
    #root {
        height: 100%;
    }
    body,
    input,
    textarea,
    button {
        font-family: ${theme.typography.family.content};
        color: ${theme.palette.gray['1000']};
    }

    body {
        background-color: ${({ theme }) => theme.palette.secondary.main};
        min-height: 100vh;
    }

    a {
        color: ${theme.palette.secondary.main};
        transition: all 0.2s;
        &:hover {
            color: ${theme.palette.secondary.light};
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${theme.typography.family.title};
        margin-bottom: ${theme.layout.spacing(3)};
    }

    p {
        margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
    }
`}
`;
