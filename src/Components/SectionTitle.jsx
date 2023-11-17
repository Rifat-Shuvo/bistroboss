import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='mx-auto my-8 text-center md:w-3/12 '>
            <p className='text-yellow-600 mb-2'>--- {subheading} ---</p>
            <h3 className='text-3xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;