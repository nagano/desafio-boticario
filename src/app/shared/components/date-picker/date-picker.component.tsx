import React from 'react';
import ReactDatePicker from "react-datepicker";

interface DatePickerProps {
    className?: string;
    value: Date;
    onChange: (updatedValue: Date) => void;
};

export const DatePicker = (props: DatePickerProps): JSX.Element => {
    return (
        <ReactDatePicker
            className={props.className}
            dateFormat="dd/MM/yyyy"
            selected={props.value}
            onChange={props.onChange} />
    );
};
