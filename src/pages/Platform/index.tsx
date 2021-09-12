import { FC } from 'react';

import Link from 'next/link';

import Content from '@/components/Content';
import Header from '@/components/Header';
import LinkButton from '@/components/LinkButton';
import List from '@/components/List';
import Progress from '@/components/Progress';

import { AlertBox, Container, JumpLink } from './styles';

const Platform: FC = () => {
    return (
        <>
            <Header />

            <Content>
                <Container>
                    <h1>Plataforma Web</h1>

                    <AlertBox>
                        <h3>OBS:</h3>

                        <p>
                            É recomendado utilizar a plataforma web através do
                            computador. Entretanto, ela é totalmente compatível
                            com o uso através do smartphone.
                        </p>
                    </AlertBox>

                    <Progress step={1} />

                    <h2>1. Sua Missão</h2>

                    <p>
                        A plataforma <em>web</em> é onde o{' '}
                        <strong>Administrador</strong> pode criar um jogo e
                        configurá-lo. Para começar, acesse a plataforma{' '}
                        <a
                            href="https://ufsc-tcc-web.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            através deste link
                        </a>
                        . Sua missão é:
                    </p>

                    <List>
                        <List.Item>Criar uma conta e fazer login</List.Item>
                        <List.Item>Criar um jogo</List.Item>
                        <List.Item>Criar uma conquista no seu jogo</List.Item>
                        <List.Item>Criar uma atividade no seu jogo</List.Item>
                        <List.Item>Configurar os níveis do seu jogo</List.Item>
                    </List>

                    <p>
                        Preste atenção na facilidade ou nas dificuldades que
                        encontrar em seguir estas instruções. Tente efetuar
                        todos os passos, mas não há problema se não conseguir
                        passar por todos.
                    </p>

                    <p>
                        Você pode continuar inventando mais coisas no seu jogo,
                        ou então ir para o seguinte passo, que é testar o
                        aplicativo. Caso queira apenas enviar o{' '}
                        <em>feedback</em> da plataforma, você também pode pular
                        a próxima etapa.
                    </p>

                    <p>
                        <strong>Não feche a plataforma ainda!</strong> Você
                        precisará dela no próximo passo.
                    </p>

                    <LinkButton href="/app">
                        Certo! Vamos para o App!
                    </LinkButton>

                    <Link href="/form" passHref>
                        <JumpLink>Quero apenas dar o feedback.</JumpLink>
                    </Link>
                </Container>
            </Content>
        </>
    );
};

export default Platform;
