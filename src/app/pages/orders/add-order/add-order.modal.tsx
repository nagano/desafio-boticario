import React, { useState } from 'react';

// Services
import MockedAPI from '../../../shared/services/api.service';
import Notification from '../../../shared/services/notification.service';
// Components
import { Modal } from '../../../shared/components/modal/modal.component';
import { LoadingButton } from '../../../shared/components/buttons/loading-button/loading-button.component';
import { LabeledInput } from '../../../shared/components/inputs/labeled-input/labeled-input.component';
import { DatePicker } from '../../../shared/components/date-picker/date-picker.component';
// Style
import './add-order.modal.scss';

const ADD_ORDER_ERROR_MSG: string = 'Erro ao adicionar compra. Por favor, tente novamente mais tarde.';
const ADD_ORDER_SUCCESS_MSG: string = 'Compra adicionada com sucesso!';

interface AddOrderModalProps {
    onClose: () => void;
};

export const AddOrderModal = (props: AddOrderModalProps): JSX.Element => {
    // State
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [id, setId] = useState<string>('');
    const [value, setValue] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());

    // Methods
    const addOrder = () => {
        if (isLoading) return;

        setIsLoading(true);

        MockedAPI
            .addOrder({ id, value, date: date.toString() })
            .then(() => {
                Notification.success(ADD_ORDER_SUCCESS_MSG);
                props.onClose();
            })
            .catch(() => {
                Notification.error(ADD_ORDER_ERROR_MSG)
                setIsLoading(false);
            });
    };

    return (
        <Modal 
            className="add-order-modal"
            onRequestClose={props.onClose}
        >
            <h3 className="text--align-center mb-30">
                Nova compra
            </h3>

            <main className="mb-30">
                <LabeledInput
                    containerClass="mb-20"
                    inputClass="add-order-modal__input"
                    id="id"
                    label="Código"
                    value={id}
                    onChange={(updatedId: string|number) => setId(updatedId as string)} />

                <LabeledInput
                    containerClass="mb-20"
                    inputClass="add-order-modal__input"
                    id="value"
                    type="number"
                    label="Valor"
                    value={value}
                    onChange={(updatedValue: string|number) => setValue(updatedValue as number)} />
                
                <DatePicker
                    className="add-order-modal__input width-100"
                    value={date}
                    onChange={(updatedDate: Date) => setDate(updatedDate)} />
            </main>

            <div className="flexbox justify-content--center">
                <LoadingButton
                    className="sign-up__button text--white"
                    isLoading={isLoading}
                    onClick={addOrder}
                >
                    Cadastrar
                </LoadingButton>
            </div>
        </Modal>
    );
};
