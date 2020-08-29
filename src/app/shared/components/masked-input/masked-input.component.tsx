import React from 'react';
import TextMask from 'react-text-mask';

interface MaskedInputProps {
    className?: string;
    id?: string;
    mask: Array<string|RegExp>;
    value: string;
    showMask?: boolean;
    placeholder?: string;
    onChange: (updatedValue: string) => void;
    onKeyDown?: () => void;
};

export const MaskedInput = (props: MaskedInputProps): JSX.Element => {
    return (
        <TextMask 
            className={props.className}
            id={props.id}
            mask={props.mask}
            type="text"
            value={props.value}
            showMask={props.showMask}
            placeholder={props.placeholder}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)}
            onKeyDown={props.onKeyDown} />
    );
};
