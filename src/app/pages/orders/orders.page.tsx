import React, { useState, useEffect } from 'react';

// Services
import MockedAPI from '../../shared/services/api.service';
import Notification from '../../shared/services/notification.service';
import Util from '../../shared/services/util.service';
// Models
import { Order, ORDER_STATUS } from '../../shared/models/order.model';
// Components
import { OrderCard } from './order-card/order-card.component';
// Style
import './orders.page.scss';

const ORDER_LIST_ERROR_MSG: string = 'Erro ao listar compras. Por favor, tente novamente mais tarde.';
const TOTAL_CASHBACK_ERROR_MSG: string = 'Erro bucar cashback acumulado. Por favor, tente novamente mais tarde.';
const MOCKED_ORDERS: Order[] = [
    {
        id: 'FEJW325LK',
        value: 438,
        date: '2020-01-01',
        appliedCashback: 0.04,
        status: ORDER_STATUS.VALIDATING
    },
    {
        id: 'O45IER2WJ',
        value: 1345,
        date: '2020-01-01',
        appliedCashback: 0.035,
        status: ORDER_STATUS.DENIED
    },
    {
        id: 'LGOE3JR78W',
        value: 173,
        date: '2020-01-01',
        appliedCashback: 0.05,
        status: ORDER_STATUS.APPROVED
    }
];

const OrdersPage = (): JSX.Element => {
    // State
    const [orders, setOrders] = useState<Order[]>([]);
    const [isOrdersLoading, setIsOrdersLoading] = useState<boolean>(false);
    const [totalCashback, setTotalCashback] = useState<number>(0);
    const [isTotalCashbackLoading, setIsTotalCashbackLoading] = useState<boolean>(false);

    // Effects
    useEffect(() => {
        setIsOrdersLoading(true);

        MockedAPI
            .listOrders()
            .then(() => setOrders(MOCKED_ORDERS))
            .catch(() => Notification.error(ORDER_LIST_ERROR_MSG))
            .finally(() => setIsOrdersLoading(false));
    }, []);

    useEffect(() => {
        setIsTotalCashbackLoading(true);

        MockedAPI
            .getTotalCashback()
            .then(() => setTotalCashback(8.65))
            .catch(() => Notification.error(TOTAL_CASHBACK_ERROR_MSG))
            .finally(() => setIsTotalCashbackLoading(false));
    }, []);

    return (
        <main className="orders flexbox flex-column align-items--center">
            <header className="mb-20">
                <h3 className="text--align-center">Cashback acumulado:</h3>
                <h2 className="text--align-center">
                    {
                        isTotalCashbackLoading ?
                            '...'
                            :
                            Util.toBRL(totalCashback)
                    }
                </h2>
            </header>

            {
                orders.map((order: Order) => (
                    <OrderCard order={order} key={order.id} />
                ))
            }
        </main>
    );
};

export default OrdersPage;
