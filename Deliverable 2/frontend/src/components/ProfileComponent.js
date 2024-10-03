import React from "react";
import PlaylistPreview from "./PlaylistPreview";

class ProfileComponent extends React.Component {
  render() {
    const { imageUrl, username, description, playlists } = this.props;
    return (
      <div>
        <img src={imageUrl} alt="Placeholder" style={{ width: '200px' }} />
        <h2>{username}</h2>
        <p>{description}</p>
        
        <hr/>

        <h2>Playlists</h2>
        {playlists.map((playlist, index) => (
          <div key={index}>
            <PlaylistPreview id={playlist.playlistID} name={playlist.name} description={playlist.description} imageUrl={playlist.imageUrl} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProfileComponent;