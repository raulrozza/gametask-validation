import { FC } from 'react';

import ExpoLogo from '@/assets/expo_logo';
import Content from '@/components/Content';
import Header from '@/components/Header';
import Progress from '@/components/Progress';

// import { Container } from './styles';

const App: FC = () => {
    return (
        <>
            <Header />

            <Content>
                <h1>Aplicativo Móvel</h1>

                <Progress step={2} />

                <p>
                    Nesta seção você fará <em>download</em> do aplicativo do
                    GameTask e testará algumas de suas funcionalidades.
                </p>

                <h2>1. Baixando o Aplicativo</h2>

                <p>
                    O aplicativo está em ambiente de testes, portanto não está
                    disponível nas lojas. Entretanto, ele pode ser baixado
                    através da plataforma usada para desenvolvê-lo: o{' '}
                    <a
                        href="https://expo.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ExpoLogo />
                    </a>
                    .
                </p>

                <p>
                    Você deve baixar o aplicativo{' '}
                    <a
                        href="https://expo.dev/client"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong>Expo Go</strong>
                    </a>{' '}
                    através da loja do seu smartphone. Após instalá-lo, abra o
                    aplicativo e toque na opção <strong>Scan QR Code</strong>{' '}
                    para ler o código QR abaixo.
                </p>
            </Content>
        </>
    );
};

export default App;
