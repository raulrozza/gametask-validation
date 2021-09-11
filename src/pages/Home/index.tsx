import { FC } from 'react';

import Content from '@/components/Content';
import Header from '@/components/Header';
import LinkButton from '@/components/LinkButton';

import { Container } from './styles';

const Home: FC = () => (
    <>
        <Header />

        <Content>
            <Container>
                <h1>Bem-vindo ao GameTask!</h1>

                <p>
                    Obrigado por vir até aqui! Nesta página vou guiá-lo pelos
                    passos necessários para testar a plataforma e fornecer seu{' '}
                    <em>feedback</em>. Sua opinião é muito importante pois torna
                    os dados sobre a aplicação mais robustos, o que é preciso
                    para meu TCC.
                </p>

                <h2>O que vou precisar que você faça:</h2>

                <ul>
                    <li>Crie uma conta no GameTask, e crie um jogo</li>
                    <li>Experimente criando alguns elementos gamificados</li>
                    <li>Baixe o Aplicativo do Gametask e entre no seu jogo</li>
                    <li>
                        Experiemente as funcionalidades do jogador rapidamente
                    </li>
                    <li>
                        Responda o breve formulário sobre o que achou da
                        experiência
                    </li>
                </ul>

                <h2>E então, posso contar com você?</h2>

                <LinkButton href="/start">Pode! Vamos começar!</LinkButton>
            </Container>
        </Content>
    </>
);

export default Home;
