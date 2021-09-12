import { FC } from 'react';

import Content from '@/components/Content';
import Header from '@/components/Header';
import LinkButton from '@/components/LinkButton';
import List from '@/components/List';

import { Container } from './styles';

const Home: FC = () => (
    <>
        <Header />

        <Content>
            <Container>
                <h1>Bem-vindo ao GameTask!</h1>

                <p>
                    Obrigado por vir até aqui! O GameTask é uma plataforma de
                    gamificação, criada para ajudar aqueles que têm interesse em
                    criar um processo gamificado, fornecendo um ambiente digital
                    onde os participantes podem competir e evoluir juntos.
                </p>

                <p>
                    Nesta página vou guiá-lo pelos passos necessários para
                    testar a plataforma e fornecer seu <em>feedback</em>. Sua
                    opinião é muito importante pois ajuda a saber quais são os
                    pontos positivos e os pontos a melhorar da aplicação.
                </p>

                <h2>O que vou precisar que você faça:</h2>

                <List>
                    <List.Item>
                        Crie uma conta no GameTask, e crie um jogo
                    </List.Item>
                    <List.Item>
                        Experimente criando alguns elementos gamificados
                    </List.Item>
                    <List.Item>
                        Baixe o Aplicativo do Gametask e entre no seu jogo
                    </List.Item>
                    <List.Item>
                        Experimente as funcionalidades como jogador
                    </List.Item>
                    <List.Item>
                        Responda o breve formulário sobre o que achou da
                        experiência
                    </List.Item>
                </List>

                <h2>E então, posso contar com você?</h2>

                <LinkButton href="/platform">Pode! Vamos começar!</LinkButton>
            </Container>
        </Content>
    </>
);

export default Home;
