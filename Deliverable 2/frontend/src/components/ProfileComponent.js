import React from "react";
import PlaylistPreview from "./PlaylistPreview";
import { setCookie, getCookie, deleteCookie } from '../utils/cookie';

class ProfileComponent extends React.Component {
  state = {
    playlists: []
  };

  componentDidMount() {
    this.fetchPlaylists();
  }

  fetchPlaylists = () => {
    const userID = getCookie('userId');
    fetch(`/api/playlists/${userID}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        this.setState({ playlists: data });
    })
    .catch(error => {
        console.error('Error fetching playlists:', error);
    });
   }

    render() {
        const { imageUrl, username, description} = this.props;
        const { playlists } = this.state;
        return (
            <div>
                <img src={ imageUrl } alt="Placeholder" style={{ width: '200px' }} />
                <h2>{ username }</h2>
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