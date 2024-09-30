import React from 'react';
import { Link } from 'react-router-dom';
import { setCookie, getCookie, deleteCookie } from '../utils/cookie';


class Header extends React.Component {
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
            </nav>
        );
    }
}

export default Header;