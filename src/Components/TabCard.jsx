import React from 'react';
import Button from './Button';

const TabCard = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 p-1 rounded-lg'>${price}</p>
                <div className="card-body flex flex-col items-center h-[220px]">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                       <Button text={'Add To Cart'} style={'bg-slate-100 border-yellow-600 text-orange-500'}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabCard