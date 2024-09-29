import React from "react";
import PlaylistPreview from "./PlaylistPreview";

class ProfileComponent extends React.Component {
    render() {
        const { imageUrl, name, description, playlists} = this.props;
        return (
            <div>
                <img src={ imageUrl } alt="Placeholder" style={{ width: '200px' }} />
                <h2>{ name }</h2>
                <p>{ description }</p>
                
                <hr/>

                {playlists.map((playlist, index) => (
                  <div key={index}>
                    <PlaylistPreview name={playlist.name} description={playlist.description} imageUrl={playlist.imageUrl} />
                    <hr />
                  </div>
                ))}

            </div>
        );
    }
};

export default ProfileComponent;