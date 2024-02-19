import Link from 'next/link';
import React from 'react';
import GetClasses from './Classes';

interface Props {
    href?: string;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    style?: 'primary' | 'secondary';
}

const LinkButton = ({ href = '/', label = 'Link Button', size = 'md', style = 'primary' }: Props) => {
    return (
        <Link href={href} className={GetClasses({ size, style })}>
            {label}
        </Link>
    );
};

export default LinkButton;
