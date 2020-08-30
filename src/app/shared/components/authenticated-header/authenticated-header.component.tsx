import React, { useState } from 'react';

// Styles
import './authenticated-header.component.scss';

interface MenuButtonProps {
    onClick: () => void;
};

const MenuButton = (props: MenuButtonProps): JSX.Element => {
    // State
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div 
            className={`menu-button flex-center-absolute flex-column hoverable ${isActive ? 'active' : ''}`} 
            onClick={props.onClick}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onTouchStart={() => setIsActive(true)}
            onTouchEnd={() => setIsActive(false)}
        >
            <div className="menu-button__line mb-5" />
            <div className="menu-button__line mb-5" />
            <div className="menu-button__line" />
        </div>
    );
};

interface AuthenticatedHeaderProps {
    onClick: () => void;
};

export const AuthenticatedHeader = (props: AuthenticatedHeaderProps): JSX.Element => {
    return (
        <div className="authenticated-header flexbox justify-content--end align-items--center pl-20 pr-20 mb-5">
            <MenuButton onClick={props.onClick} />
        </div>
    );
};
