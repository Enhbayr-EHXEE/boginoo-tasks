import React from 'react';

export const Input = (props) => {
    let { className, disabled,...others} = props;

    return (
        <div>
            {
            disabled ? <input className={`input ${className} disabled`} {...others} />:
            <input className={`input ${className}`} {...others} />
            }
        </div>
    );
};