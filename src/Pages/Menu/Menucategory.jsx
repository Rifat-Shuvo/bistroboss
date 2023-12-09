import React from 'react';
import MenuItem from '../../Components/MenuItem';
import Cover from '../../Components/Cover';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';

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
            <Link to={`/order/${title}`}><Button text={'Order Now'} style={'text-black'}></Button></Link>
{/* <Button text={'View Full Item'} style={'text-black'}></Button>
<Button text={'View Full Item'} style={'text-black'}></Button>
<Button text={'View Full Item'} style={'text-black'}></Button>
<Button text={'View Full Item'} style={'text-black'}></Button> */}
        </div>
    );
};

export default Menucategory;