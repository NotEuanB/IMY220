import React from 'react';
import Login from '../components/Login.js';
import Register from '../components/Register.js';

class Splash extends React.Component {
    render() {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <div className='grid grid-cols-3 gap-80'>
                    <div className='flex justify-center items-center'>
                        <Register />
                    </div>
                    <div className='flex justify-center items-center'>
                        <h1 className='font-lightning text-9xl'>Sparky</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Login />
                    </div>
                </div>
            </div>
        );
    }
}

export default Splash;