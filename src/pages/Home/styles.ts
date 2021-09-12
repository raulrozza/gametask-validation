import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    h1,
    h2 {
        color: ${({ theme }) => theme.palette.secondary.dark};
    }

    h2 {
        text-align: left;
    }
`;
