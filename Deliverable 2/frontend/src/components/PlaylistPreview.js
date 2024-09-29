import React from "react";

class PlayListPreview extends React.Component {
    render() {
        const { name, imageUrl, description } = this.props;
        return (
            <div>
                <img src={imageUrl} alt="Placeholder" style={{ width: '100px' }} />
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        );
    }
};

export default PlayListPreview;