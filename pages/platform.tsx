import type { NextPage } from 'next';
import Head from 'next/head';

import Platform from '@/pages/Platform';

const NextPlatform: NextPage = () => (
    <>
        <Head>
            <title>Plataforma Web</title>

            <meta
                name="description"
                content="Test instructions to validate the GameTask web platform. The instructions include: accessing the platform, creating a game and configuring it."
            />
        </Head>

        <Platform />
    </>
);

export default NextPlatform;
