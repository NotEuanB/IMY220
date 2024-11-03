import React from "react";
import PlaylistPreview from "./PlaylistPreview";
import { getCookie } from '../utils/cookie';

class ProfileComponent extends React.Component {
    state = {
        playlists: []
    };

    componentDidMount() {
        this.fetchPlaylists();
    }

    fetchPlaylists = () => {
        const { userId } = this.props;
        const loggedInUserId = getCookie('userId');

        // Determine if viewing own profile or another user's profile
        const fetchUrl = userId === loggedInUserId
            ? `/api/playlists/${loggedInUserId}`
            : `/api/playlists/${userId}/playlists`;

        fetch(fetchUrl)
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
        const { imageUrl, username, description, isFollowing, isOwnProfile } = this.props;
        const { playlists } = this.state;

        return (
            <div className="p-4 rounded-lg shadow-md font-liberation">
                <div className="flex items-center mb-4">
                    <img 
                            src={imageUrl} 
                            alt="Profile" 
                            style={{ width: '128px', height: '128px' }} 
                            className="rounded-full mr-4" 
                        />                    <div>
                        <h2 className="text-5xl font-bold">{username}</h2>
                        {isFollowing || isOwnProfile ? (
                            <p className="text-gray-700">{description}</p>
                        ) : (
                            <p className="text-red-500">You must follow this user to see more details.</p>
                        )}
                    </div>
                </div>
                {isFollowing || isOwnProfile && (
                    <div>
                        <hr className="my-4"/>
                        <h2 className="text-xl font-semibold mb-2">Playlists</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {playlists.map((playlist, index) => (
                                <div key={index} className=" p-4 rounded-lg shadow-sm">
                                    <PlaylistPreview 
                                        id={playlist.playlistID} 
                                        name={playlist.name} 
                                        description={playlist.description} 
                                        imageUrl={playlist.imageUrl} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileComponent;