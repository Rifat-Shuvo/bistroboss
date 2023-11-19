import React from 'react';

const Button = ({text, style}) => {
    
    return (
        <div>
            <button className={`btn btn-outline ${style}`}>{text}</button>
        </div>
    );
};

export default Button;