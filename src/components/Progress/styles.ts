import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    align-items: center;

    margin-bottom: ${({ theme }) => theme.layout.spacing(4)};
`;

type FillProps = {
    filled?: boolean;
};

export const StepCircle = styled.div<FillProps>`
    height: 48px;
    width: 48px;

    background-color: ${({ theme, filled }) =>
        filled ? theme.palette.secondary.light : theme.palette.gray[600]};

    border-radius: 50%;
`;

export const BetweenSteps = styled.hr<FillProps>`
    flex: 1;
    border: 1px solid
        ${({ theme, filled }) =>
            filled ? theme.palette.secondary.light : theme.palette.gray[600]};

    margin: ${({ theme }) => theme.layout.spacing(0, 1)};
`;
