import React from 'react';
import Cover from '../../Components/Cover';
import banner from '../../assets/menu/banner3.jpg'
import dessert from '../../assets/menu/dessert-bg.jpeg'
import pizzas from '../../assets/menu/pizza-bg.jpg'
import salads from '../../assets/menu/salad-bg.jpg'
import soups from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import Menucategory from './Menucategory';
import Button from '../../Components/Button';
const Menu = () => {
    const [menu] = useMenu()
    const pizza = menu.filter(item => item.category === 'pizza')
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    // console.log(offered);
    return (
        <div className='pb-10'>
            <Cover img={banner} height={'h-[800px]'} title={'Our Menu'} bg={'bg-black'} text={'text-neutral-content'}></Cover>
            <SectionTitle subheading={'Do not Miss'} heading={"Today's Offer"}></SectionTitle>
            {/* offered items */}
            <Menucategory items={offered}></Menucategory>

            {/* dessertItems */}
            <Menucategory items={desserts}
                title={'dessert'} img={dessert}
            ></Menucategory>

            {/* PizzaItems */}
            <Menucategory items={pizza}
                title={'pizza'} img={pizzas}
            ></Menucategory>

            {/* dessertItems */}
            <Menucategory items={salad}
                title={'salad'} img={salads}
            ></Menucategory>

            {/* dessertItems */}
            <Menucategory items={soup}
                title={'soup'} img={soups}
            ></Menucategory>



        </div>
    );
};

export default Menu;