import type { NextPage } from 'next';
import Head from 'next/head';

import App from '@/pages/App';

const NextApp: NextPage = () => (
    <>
        <Head>
            <title>Aplicativo Móvel</title>

            <meta
                name="description"
                content="Test instructions to validate the GameTask app. The instructions include: downloading the app, joining a game, and completing activities."
            />
        </Head>

        <App />
    </>
);

export default NextApp;
