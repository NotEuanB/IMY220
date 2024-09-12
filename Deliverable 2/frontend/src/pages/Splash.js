import React from 'react';
import Login from '../components/Login.js'
import Register from '../components/Register.js';

class Splash extends React.Component {
    render() {
        console.log("hi");
        return (
            <div>
                <h1>Splash</h1>
                <Login />
                <hr/>
                <Register />
            </div>
        );
    }
}

export default Splash;