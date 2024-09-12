import React from "react";

class ProfilePreview extends React.Component {
    render() {
        const { image, name } = this.props;
        return (
            <div>
                <img src={ image } alt="Placeholder" style={{ width: '50px' }} />
                <span>{ name }</span>
            </div>
        );
    }
};

export default ProfilePreview;