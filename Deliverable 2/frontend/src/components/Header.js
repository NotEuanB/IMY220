import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <Link to="/home" style={{ padding: '5px' }}>
                    Home
                </Link>
                <Link to="/profile" style={{ padding: '5px' }}>
                    Profile
                </Link>
                <Link to="/playlist" style={{ padding: '5px' }}>
                    Playlist
                </Link>
            </nav>
        );
    }
}

export default Header;