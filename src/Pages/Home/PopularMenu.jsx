import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuItem from '../../Components/MenuItem';
import Button from '../../Components/Button';
import useMenu from '../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=> {
    //         const popular = data.filter(item => item.category === 'popular')
    //         setMenu(popular)})
    // },[])

    return (
        <section className='mb-12'>
            <SectionTitle heading="From Our Menu" subheading="Popular Items"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 px-5'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}>
                    </MenuItem>)
                }
                
            </div>
            <div className='text-center mt-3'><Button style={'text-black'} text={'View Full Menu'}></Button></div>
        </section>
    );
};

export default PopularMenu;