// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    // eslint-disable-next-line react/display-name
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="theme-color" content="#852c80" />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
