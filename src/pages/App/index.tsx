import { FC } from 'react';

import QRCode from 'react-qr-code';
import { useTheme } from 'styled-components';

import ExpoLogo from '@/assets/expo_logo';
import Content from '@/components/Content';
import Header from '@/components/Header';
import LinkButton from '@/components/LinkButton';
import List from '@/components/List';
import Progress from '@/components/Progress';

import { CodeContainer, Container } from './styles';

const App: FC = () => {
    const theme = useTheme();

    return (
        <>
            <Header />

            <Content>
                <Container>
                    <h1>Aplicativo Móvel</h1>

                    <Progress step={2} />

                    <p>
                        Nesta seção você fará <em>download</em> do aplicativo do
                        GameTask e testará algumas de suas funcionalidades.
                    </p>

                    <h2>1. Baixando o Aplicativo</h2>

                    <p>
                        O aplicativo está em ambiente de testes, portanto não
                        está disponível nas lojas. Entretanto, ele pode ser
                        baixado através da plataforma usada para desenvolvê-lo:
                        o{' '}
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
                        através da loja do seu smartphone. Após instalá-lo, abra
                        o aplicativo e toque na opção{' '}
                        <strong>Scan QR Code</strong> para ler o código QR
                        abaixo.
                    </p>

                    <CodeContainer>
                        <QRCode
                            value="exp://exp.host/@raulrozza/gametask"
                            size={128}
                            bgColor={theme.palette.gray['100']}
                        />
                    </CodeContainer>

                    <p>
                        Após ler o código, o <strong>Expo</strong> deve começar
                        o download do GameTask. Ao concluir, ele abrirá o
                        aplicativo imediatamente.
                    </p>

                    <h2>2. Sua Missão</h2>

                    <p>
                        Entrando no aplicativo, você pode testar suas
                        funcionalidades. Lembre de deixar a plataforma{' '}
                        <em>web</em> aberta na seleção de jogos para poder
                        compartilhar o código de convite do jogo, ou parar ler o
                        Código QR do mesmo. Sua missão é:
                    </p>

                    <List>
                        <List.Item>
                            Fazer login (ou criar uma nova conta, e então fazer
                            login)
                        </List.Item>
                        <List.Item>
                            Entrar no jogo que você criou através da plataforma{' '}
                            <em>web</em>
                        </List.Item>
                        <List.Item>Concluir uma atividade</List.Item>
                    </List>

                    <p>
                        Você pode continuar testando as funcionalidades do
                        aplicativo. Quando terminar, pode ir para o último
                        passo.
                    </p>

                    <LinkButton href="/forn">
                        Terminei, vamos para o último passo!
                    </LinkButton>
                </Container>
            </Content>
        </>
    );
};

export default App;
