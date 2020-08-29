import React from 'react';

// Interfaces
import { COLOR } from '../../../constants/layout.constants';
// Components
import { SemiCircleLoading } from '../../loading/semi-circle/semi-circle-loading.component';
import { SimpleButton } from '../simple-button/simple-button.component';

interface LoadingButtonProps {
    className?: string;
    isLoading?: boolean;
    loadColor?: COLOR
    onClick: () => void;
};

export const LoadingButton = (props: React.PropsWithChildren<LoadingButtonProps>): JSX.Element => {
    return (
        <SimpleButton
            className={props.className}
            onClick={props.onClick}
        >
            {
                props.isLoading ?
                    <SemiCircleLoading side={21} width={2} color={props.loadColor ? props.loadColor : COLOR.WHITE} />
                    :
                    props.children
            }
        </SimpleButton>
    );
};
