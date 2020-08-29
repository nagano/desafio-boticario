import React from 'react';

// Constants
import { COLOR } from '../../../constants/layout.constants';
// Style
import './semi-circle-loading.component.scss';

interface SemiCircleLoadingComponentProps {
    className?: string;
    side?: number;
    width?: number;
    color?: COLOR
};

export const SemiCircleLoading = (props: SemiCircleLoadingComponentProps): JSX.Element => {
    // Default values
    const side: number = props.side || 20;
    const width: number = props.width || 1;

    return (
        <main 
            className={`semi-circle-loading m-a ${props.color ? props.color : COLOR.WHITE} ${props.className}`}
            style={{width: `${side}px`, height: `${side}px`, borderWidth: `${width}px`}} />
    );
};
