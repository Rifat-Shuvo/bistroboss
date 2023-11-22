import React from 'react';
import MenuItem from '../../Components/MenuItem';
import Cover from '../../Components/Cover';

const Menucategory = ({title,items,img}) => {
    // console.log(items);
    return (
        <div className='pt-8'>
            {title &&  <Cover img={img} height={'h-[600px]'} title={title} bg={'bg-black'}text={'text-neutral-content'}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 px-5 mt-16'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}>
                    </MenuItem>)
                }
                
            </div>
        </div>
    );
};

export default Menucategory;