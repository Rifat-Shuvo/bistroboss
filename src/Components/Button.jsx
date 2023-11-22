import React from 'react';

const Button = ({text, style}) => {
    
    return (
        <div className='text-center'>
            <button className={`btn btn-outline border-0 border-b-4 mt-4 ${style}`}>{text}</button>
        </div>
    );
};

export default Button;