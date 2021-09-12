import type { NextPage } from 'next';
import Head from 'next/head';

import Form from '@/pages/Form';

const NextForm: NextPage = () => (
    <>
        <Head>
            <title>Final</title>

            <meta
                name="description"
                content="Final page on the GameTask tests. Follow the link to answer the feedback form."
            />
        </Head>

        <Form />
    </>
);

export default NextForm;
