import React from 'react';
import Login from '../components/Login.js';
import Register from '../components/Register.js';

const styles = {
    body: {
        backgroundColor: '#0A0759',
        margin: 0,
        padding: 0,
        color: '#F2A20C',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center'
    },
    column: {
        flex: 1,
        padding: '10px'
    },
    heading: {
        color: '#F2B705',
        fontSize: '150px',
        fontWeight: 80,
        fontFamily: 'Lightning'
    }
};

class Splash extends React.Component {
    render() {
        return (
            <div style={styles.body}>
                <div style={styles.column}>
                    <Register />
                </div>
                <div style={styles.column}>
                    <h1 style={styles.heading}>Sparky</h1>
                </div>
                <div style={styles.column}>
                    <Login />
                </div>
            </div>
        );
    }
}

export default Splash;