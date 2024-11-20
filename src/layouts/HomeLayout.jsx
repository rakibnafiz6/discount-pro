import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import TopBrands from '../components/TopBrands/TopBrands';
import BrandSell from '../components/BrandSell/BrandSell';
import { useLoaderData } from 'react-router-dom';

const HomeLayout = () => {
    const couponCard = useLoaderData();
    

    return (
        <div>
            <header className='w-11/12 mx-auto py-4'>
            <Navbar></Navbar>    
            </header>
            <main className='w-11/12 mx-auto'>
            <Home></Home>
            <section>
            <TopBrands couponCard={couponCard}></TopBrands>    
            </section>
            <BrandSell couponCard={couponCard}></BrandSell>    
            </main>
        </div>
    );
};

export default HomeLayout;