import type { AppProps } from 'next/app';

import AppContainer from 'src/containers';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppContainer>
            <Component {...pageProps} />
        </AppContainer>
    );
}

export default MyApp;
