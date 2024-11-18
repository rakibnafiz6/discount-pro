import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';

const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto py-3'>
            <Navbar></Navbar>    
            </header>
            <main className='w-11/12 mx-auto'>
            <Home></Home>    
            </main>
        </div>
    );
};

export default HomeLayout;