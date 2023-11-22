import React from 'react';
import TabCard from '../../Components/TabCard';

const Ordertab = ({items}) => {
    return (
        <div>
           <div className='grid md:grid-cols-3 gap-10'>
                    {
                        items.map(item=> <TabCard key={item._id} item={item}></TabCard>)
                    }
                    </div> 
        </div>
    );
};

export default Ordertab;