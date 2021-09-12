import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CodeContainer = styled.div`
    display: flex;
    justify-content: center;

    margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
`;
