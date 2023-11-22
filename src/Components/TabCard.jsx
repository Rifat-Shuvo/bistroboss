import React from 'react';

const TabCard = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 p-1 rounded-lg'>${price}</p>
                <div className="card-body text-start h-[220px]">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabCard