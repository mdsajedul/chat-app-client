import React from 'react';
import Login from '../Login/Login/Login';

const Container = () => {
    return (
        <div className='containerflex items-center bg-neutral-200'>
            <div className='h-screen flex justify-center items-center'>
                <div className=' w-3/4 h-3/4 bg-neutral-50 bg-neutral-200 rounded-lg'>
                    <Login></Login>
                </div>
            </div>
        </div>
    );
};

export default Container;