import { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '@/config/theme';

import GlobalStyles from './styles';

const StyledComponents: FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />

        {children}
    </ThemeProvider>
);

export default StyledComponents;
