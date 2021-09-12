import { FC } from 'react';

import Image from 'next/image';

import Content from '@/components/Content';
import Header from '@/components/Header';
import Progress from '@/components/Progress';

import { Container, GoogleLink } from './styles';

const Form: FC = () => {
    return (
        <>
            <Header />

            <Content>
                <Container>
                    <h1>Obrigado por testar o GameTask!</h1>

                    <Progress step={3} />

                    <p>
                        Agora que seguiu todos os passos, peço apenas que
                        responda a pesquisa para dar seu <em>feedback</em>. O
                        formulário é curtinho e pode ser respondido em até 5
                        minutos. Muito obrigado!
                    </p>

                    <GoogleLink
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdTtciw0VC2JgSDFILW9b7-rfp6yC3ydmwmM5NF2IGE8zOTMg/viewform?usp=sf_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src="/google_logo.png"
                            alt="Google"
                            width={24}
                            height={24}
                        />
                        <span>Responder o formulário!</span>
                    </GoogleLink>
                </Container>
            </Content>
        </>
    );
};

export default Form;
