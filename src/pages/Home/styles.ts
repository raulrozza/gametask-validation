import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1,
    h2 {
        color: ${({ theme }) => theme.palette.secondary.dark};
    }

    h2,
    li {
        text-align: left;
    }

    li {
        list-style: none;
        margin: ${({ theme }) => theme.layout.spacing(2, 0)};

        &::before {
            content: '–';
            color: ${({ theme }) => theme.palette.secondary.main};
            margin-right: ${({ theme }) => theme.layout.spacing(1)};
        }

        &:not(:last-child)::after {
            content: ';';
        }

        &:last-child::after {
            content: '.';
        }
    }
`;
