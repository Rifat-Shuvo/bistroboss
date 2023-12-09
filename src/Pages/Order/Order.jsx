import React, { useState } from 'react';
import Cover from '../../Components/Cover';
import order from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import Ordertab from './Ordertab';
import { useParams } from 'react-router-dom';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {name} = useParams()
    const initialIndex = categories.indexOf(name)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
   
    const pizza = menu.filter(item => item.category === 'pizza')
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Cover img={order} height={'h-[800px]'} title={'Order Food'} bg={'bg-black'} text={'text-white'}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)
            }>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza </Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts </Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <Ordertab items={salad}></Ordertab>
                </TabPanel>
                <TabPanel>
                <Ordertab items={pizza}></Ordertab>
                </TabPanel>
                <TabPanel>
                <Ordertab items={soup}></Ordertab>
                </TabPanel>
                <TabPanel>
                <Ordertab items={desserts}></Ordertab>
                </TabPanel>
                <TabPanel>
                <Ordertab items={drinks}></Ordertab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;