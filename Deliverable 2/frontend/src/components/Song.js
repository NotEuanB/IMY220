import React from "react";

class Song extends React.Component {
    render() {
        const { title, link, imageUrl } = this.props;
        return (
            <div>
                <img src={imageUrl} alt="Placeholder" style={{ width: '100px' }} />
                <h3>{title}</h3>
                <p>{link}</p>
            </div>
        );
    }
};

export default Song;