import React from 'react';
import { Link } from 'react-router-dom';
import { setCookie, getCookie, deleteCookie } from '../utils/cookie';


class Header extends React.Component {
    handleLogout = async () => {
        try {
            // Send request to logout endpoint
            await fetch('/api/logout', {
                method: 'POST',
                credentials: 'include' // Include cookies in the request
            });

            // Delete the userId cookie
            deleteCookie('userId');

            // Redirect to splash page
            window.location.href = '/'; 
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    render() {
        const userID = getCookie('userId');
        return (
            <nav>
                <Link to="/home" style={{ padding: '5px' }}>
                    Home
                </Link>
                <Link to={`/profile/${ userID }`} style={{ padding: '5px' }}>
                    Profile
                </Link>
                <button onClick={this.handleLogout} style={{ padding: '5px' }}>
                    Logout
                </button>
            </nav>
        );
    }
}

export default Header;