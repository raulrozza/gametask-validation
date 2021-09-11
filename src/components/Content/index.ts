import styled, { keyframes } from 'styled-components';

const comeToScene = keyframes`
    from {
        margin-top: 300px;
        opacity: 0;
    }

    to {
        margin-top: 0px;
        opacity: 1
    }
`;

const Content = styled.main`
    background-color: ${({ theme }) => theme.palette.gray['100']};
    padding: ${({ theme }) => theme.layout.spacing(4)};

    border-radius: ${({ theme }) => theme.layout.borderRadius.medium};

    max-width: 578px;

    margin: 0 auto;

    animation: ${comeToScene} 1s;
`;

export default Content;
