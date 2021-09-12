import type { NextPage } from 'next';
import Head from 'next/head';

import Home from '@/pages/Home';

const NextHome: NextPage = () => (
    <>
        <Head>
            <title>GameTask - Teste da Plataforma</title>

            <meta
                name="description"
                content="Test instructions to validate the GameTask platform and provide useful feedback"
            />
        </Head>

        <Home />
    </>
);

export default NextHome;
