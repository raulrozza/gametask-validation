import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const GoogleLink = styled.a`
    ${({ theme }) => css`
        box-shadow: 0px 3px 10px -1px ${theme.palette.gray['400']};

        padding: ${theme.layout.spacing(4, 4)};

        border-radius: ${theme.layout.borderRadius.medium};

        text-decoration: none;

        align-self: center;

        &:hover {
            box-shadow: 0px 3px 10px 1px ${theme.palette.gray['400']};
            transform: scale(1.01);
        }

        display: flex;
        align-items: center;

        span {
            margin-left: ${theme.layout.spacing(1)};
        }
    `}
`;
