import React, { useState } from 'react';

// Style
import './password-input.component.scss';
// Assets
const eyeIcon: string = require('../../../../assets/icons/icon.eye.png');
const eyeSlashIcon: string = require('../../../../assets/icons/icon.eye-slash.png');

interface PasswordInputProps {
    className?: string;
    id?: string;
    value: string;
    placeholder?: string;
    onChange: (updatedValue: string) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const PasswordInput = (props: PasswordInputProps): JSX.Element => {
    // State
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className={`password-input flexbox ${props.className}`}>
            <input 
                id={props.id}
                type={showPassword ? 'text' : 'password'}
                value={props.value}
                placeholder={props.placeholder}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)}
                onKeyDown={props.onKeyDown} />
            
            <div 
                className="password-input__icon-container flex-center-absolute hoverable"
                onClick={() => setShowPassword(!showPassword)}
            >
                <img 
                    className="password-input__icon"
                    src={showPassword ? eyeSlashIcon : eyeIcon} 
                    alt="show password icon" />
            </div>
        </div>
    );
};
