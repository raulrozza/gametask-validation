import { FC } from 'react';

import StyledComponents from 'src/containers/StyledComponents';

const AppContainer: FC = ({ children }) => (
    <StyledComponents>{children}</StyledComponents>
);

export default AppContainer;
