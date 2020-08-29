import { toast, ToastOptions } from 'react-toastify';

const defaultOptions: ToastOptions = {
    closeOnClick: true,
    autoClose: 3000,
    position: 'top-right',
    hideProgressBar: false,
    pauseOnFocusLoss: false,
    closeButton: false
};

export enum NOTIFICATION_ID {
    OPERATION_IN_PROGRESS = 'OPERATION_IN_PROGRESS',
    INCOMPLETE_FORM = 'INCOMPLETE_FORM',
    INCORRECT_FORM = 'INCORRECT_FORM'
};

export default {

    success(message: string|JSX.Element) {
        toast(
            message,
            {
                ...defaultOptions,
                type: 'success',
                className: 'toast-notification__success'
            }
        );
    },

    /**
     * Show an error notification.
     * If an id is passed, only 1 notification with the given id will be visible at a time.
     * @param {string|JSX.Element} message 
     * @param {NOTIFICATION_ID} id 
     */
    error(message: string|JSX.Element, id?: NOTIFICATION_ID) {
        toast(
            message,
            {
                ...defaultOptions,
                toastId: id,
                type: 'error',
                className: 'toast-notification__error'
            }
        );
    },

    info(message: string|JSX.Element) {
        toast(
            message,
            {
                ...defaultOptions,
                type: 'info',
                className: 'toast-notification__info'
            }
        )
    }

}
