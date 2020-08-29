import React, { useState } from 'react';

interface SimpleButtonProps {
    className?: string;
    onClick: () => void;
};

export const SimpleButton = (props: React.PropsWithChildren<SimpleButtonProps>) => {
    // State
    const [isTouching, setIsTouching] = useState<boolean>(false);

    return (
        <button 
            className={`text--bold ${isTouching ? 'active-touch' : ''} ${props.className}`}
            onClick={props.onClick}
            onTouchStart={() => setIsTouching(true)}
            onTouchEnd={() => setIsTouching(false)}
        >
            {props.children}
        </button>
    );
};
