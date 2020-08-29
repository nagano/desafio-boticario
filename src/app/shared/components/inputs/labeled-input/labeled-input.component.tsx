import React from 'react';

interface LabeledInputProps {
    containerClass?: string;
    inputClass?: string;
    id?: string;
    type?: string;
    value: string|number;
    onChange: (updatedValue: string|number) => void;
    onKeyDown?: () => void;
};

export const LabeledInput = (props: LabeledInputProps): JSX.Element => {
    return (
        <main className={`flexbox flex-column ${props.containerClass}`}>
            <label className="fz-label text--gray-4 mb-5" htmlFor={props.id}>E-mail</label>
            <input 
                className={props.inputClass}
                id={props.id}
                type={props.type || 'text'}
                value={props.value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)}
                onKeyDown={props.onKeyDown} />
        </main>
    );
};
