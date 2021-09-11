import { FC } from 'react';

import Link from 'next/link';

import { CustomLink } from './styles';

type ILinkButtonProps = {
    children: string;
    href: string;
};

const LinkButton: FC<ILinkButtonProps> = ({ children, href }) => (
    <Link href={href} passHref>
        <CustomLink>{children}</CustomLink>
    </Link>
);

export default LinkButton;
