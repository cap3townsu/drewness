'use client';

import React from 'react';
import GetClasses from './Classes';

interface Props {
    handleClick?: () => void;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    style?: 'primary' | 'secondary';
}

const EventButton = ({
    handleClick = () => {
        console.log('Event Button Clicked');
    },
    label = 'Event Button',
    size = 'md',
    style = 'primary',
}: Props) => {
    return (
        <button className={GetClasses({ size, style })} onClick={handleClick}>
            {label}
        </button>
    );
};

export default EventButton;
