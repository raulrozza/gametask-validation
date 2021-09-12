import { FC } from 'react';

import { BetweenSteps, Container, StepCircle } from './styles';

type IProgressProps = {
    step: 1 | 2 | 3;
};

const Progress: FC<IProgressProps> = ({ step }) => (
    <Container>
        <StepCircle filled={step >= 1} />
        <BetweenSteps filled={step >= 2} />
        <StepCircle filled={step >= 2} />
        <BetweenSteps filled={step >= 3} />
        <StepCircle filled={step >= 3} />
    </Container>
);

export default Progress;
