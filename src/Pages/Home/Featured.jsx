import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg'
import Button from '../../Components/Button';

const Featured = () => {
    return (
        <div className="bg-[url('/featured.jpg')] text-white pt-8 my-20 bg-fixed">
            <SectionTitle subheading={'check it out'} heading={'Featured Item'}></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2023</p>
                    <p className='uppercase'>Where can iget some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque esse repudiandae quis beatae, explicabo atque nihil tenetur cumque debitis sint a eos ducimus non ab vero doloribus quae similique voluptas, expedita commodi! Perferendis reprehenderit mollitia dolore molestiae, veniam ea harum temporibus animi consectetur expedita possimus ex modi quam inventore.</p>
                    {/* <div className='border-0 border-b-4 mt-4 text-white'></div> */}
                    <Button text={'Order Now'} style={'text-white'}></Button>
                </div>
            </div>
        </div>
    );
};

export default Featured;