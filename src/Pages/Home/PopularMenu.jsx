import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuItem from '../../Components/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popular = data.filter(item => item.category === 'popular')
            setMenu(popular)})
    },[])

    return (
        <section className='mb-12'>
            <SectionTitle heading="From Our Menu" subheading="Popular Items"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 px-5'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}>
                    </MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;