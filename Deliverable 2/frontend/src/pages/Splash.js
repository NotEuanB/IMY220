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
                    <div className=''>
                        <h1 className='font-lightning text-9xl'>Sparky</h1>
                        <p className='text-3xl'>Is your music taste <span className='font-lightning'>electric</span></p>
                        <p className='text-2xl'>Share your playlists with millions of users today!</p>
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