import React from 'react';

// Components
import { MaskedInput } from '../masked-input/masked-input.component';
import { PasswordInput } from '../password-input/password-input.component';

interface LabeledInputProps {
    containerClass?: string;
    inputClass?: string;
    id?: string;
    type?: string;
    label: string;
    value: string|number;
    mask?: Array<string|RegExp>;
    onChange: (updatedValue: string|number) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const LabeledInput = (props: LabeledInputProps): JSX.Element => {
    // Default values
    const type: string = props.type || 'text';

    return (
        <main className={`flexbox flex-column ${props.containerClass}`}>
            <label className="fz-label text--gray-4 mb-5" htmlFor={props.id}>{props.label}</label>

            {
                props.mask ?
                    <MaskedInput
                        className={props.inputClass}
                        id={props.id}
                        mask={props.mask}
                        value={props.value as string}
                        onChange={(updatedValue: string) => props.onChange(updatedValue)} />
                    :
                    type === 'password' ?
                        <PasswordInput
                            className={props.inputClass}
                            id={props.id}
                            value={props.value as string}
                            onChange={(updatedValue: string) => props.onChange(updatedValue)}
                            onKeyDown={props.onKeyDown} />
                        :
                        <input 
                            className={props.inputClass}
                            id={props.id}
                            type={type}
                            value={props.value}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)}
                            onKeyDown={props.onKeyDown} />
            }
        </main>
    );
};
