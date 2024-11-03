import React from "react";
import { Link } from 'react-router-dom';

class ProfilePreview extends React.Component {
    render() {
        const { image, username, userId } = this.props;
        return (
            <Link to={`/profile/${userId}`} className="block">
                <div>
                    <img src={ image } alt="Placeholder" style={{ width: '100px' }} />
                    <span>{ username }</span>
                </div>
            </Link>
        );
    }
};

export default ProfilePreview;