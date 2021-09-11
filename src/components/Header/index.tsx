import { FC } from 'react';

import { Container, Logo } from './styles';

const Header: FC = () => (
    <Container>
        <Logo
            src="/logo192outline.png"
            alt="GameTask Logo"
            width={80}
            height={80}
        />
    </Container>
);

export default Header;
