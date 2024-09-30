import React from "react";

class Song extends React.Component {
    render() {
        const { title, link } = this.props;
        const trackId = link.split('/track/')[1].split('?')[0]; // Extract track ID from link
        const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;

        return (
            <div>
                <h3>{title}</h3>
                <iframe
                    src={embedUrl}
                    width="600"
                    height="80"
                    allowtransparency="true"
                    allow="encrypted-media"
                ></iframe>
            </div>
        );
    }
};

export default Song;