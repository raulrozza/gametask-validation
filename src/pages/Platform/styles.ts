import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AlertBox = styled.section`
    ${({ theme }) => css`
        padding: ${theme.layout.spacing(4)};
        border-radius: ${theme.layout.borderRadius.medium};

        background-color: ${theme.palette.gray[200]};

        h3 {
            color: ${theme.palette.secondary.light};
        }

        margin-bottom: ${theme.layout.spacing(4)};
    `}
`;

export const JumpLink = styled.a`
    margin-top: ${({ theme }) => theme.layout.spacing(4)};

    align-self: center;

    text-decoration: none;

    font-size: 14px;

    color: ${({ theme }) => theme.palette.secondary.light};

    ::after {
        content: '';
        display: block;
        height: 1px;
        background-color: ${({ theme }) => theme.palette.secondary.light};
        width: 100%;
        transform: scaleX(0);

        transition: transform 0.3s;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`;
