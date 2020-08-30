export interface Order {
    id: string;
    value: number;
    date: string;
    appliedCashback?: number;
    status?: ORDER_STATUS;    
};

export enum ORDER_STATUS {
    VALIDATING = 'Em validação',
    DENIED = 'Reprovado',
    APPROVED = 'Aprovado'
};
