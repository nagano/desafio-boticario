import React from 'react';

// Services
import Util from '../../../shared/services/util.service'
// Models
import { Order, ORDER_STATUS } from '../../../shared/models/order.model';
// Style
import './order-card.component.scss';

interface OrderCardProps {
    order: Order
};

export const OrderCard = (props: OrderCardProps): JSX.Element => {
    // Methods
    const getStatusColor = (status: ORDER_STATUS): string => {
        switch (status) {
            case ORDER_STATUS.VALIDATING:
                return 'text--blue-1';
            case ORDER_STATUS.DENIED:
                return 'text--orange-2';
            case ORDER_STATUS.APPROVED:
                return 'text--green-2'
            default:
                return 'text--gray-4';
        }
    };
    
    return (
        <div className="order-card flexbox width-100 mb-20">
            <section className="order-card__col-1 flexbox flex-column mr-5">
                <p className="mb-5">{`Código: ${props.order.id}`}</p>
                <p>{`Data: ${props.order.date}`}</p>
            </section>

            <section className="order-card__col-2 flexbox flex-column mr-5 ml-5">
                <p className="mb-5">Status:</p>
                <p className={`text--bold ${getStatusColor(props.order.status!)}`}>
                    {props.order.status}
                </p>
            </section>

            <section className="order-card__col-3 flexbox flex-column ml-5">
                <p className="mb-5">{`Cashback (${Util.addThousandSeparator(props.order.appliedCashback!*100, 1)}%)`}</p>
                <p className="order-card__cashback text--bold">
                    {Util.toBRL(props.order.value * props.order.appliedCashback!)}
                </p>
            </section>
        </div>
    );
};
