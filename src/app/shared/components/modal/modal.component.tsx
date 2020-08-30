import React from 'react';
import ReactModal from 'react-modal';

// Style
import './modal.component.scss';

interface ModalProps {
    className?: string;
    overlayClass?: string;
    onRequestClose?: () => void;
};

export const Modal = (props: React.PropsWithChildren<ModalProps>): JSX.Element => {
    return (
        <ReactModal
            className={`modal ${props.className}`}
            overlayClassName={`modal__overlay ${props.overlayClass}`}
            isOpen
            onRequestClose={props.onRequestClose}
        >
            {props.children}
        </ReactModal>
    );
};
