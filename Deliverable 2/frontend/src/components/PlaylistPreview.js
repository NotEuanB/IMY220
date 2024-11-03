import React from "react";
import { Link } from "react-router-dom";
import { getCookie } from '../utils/cookie';

class PlaylistPreview extends React.Component {
    state = {
        userIDs: [],
        isLoading: true,
        error: null
    };

    componentDidMount() {
        this.fetchPlaylistData();
    }

    fetchPlaylistData = async () => {
        const { id } = this.props;

        try {
            const response = await fetch(`/api/playlist/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.setState({ userIDs: data.userIDs, isLoading: false });
        } catch (error) {
            console.log("Error fetching playlists:", error);
            this.setState({ error: error.message, isLoading: false });
        }
    };

    handleDelete = async () => {
        const { id, onDelete } = this.props;
        const userId = getCookie('userId');

        try {
            const response = await fetch(`/api/playlists/${id}/remove`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'user-id': userId
                }
            });

            if (response.ok) {
                if (onDelete) {
                    onDelete(id);
                }
            } else {
                const errorData = await response.json();
                console.error('Failed to remove playlist from user library:', errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    render() {
        const { id, name, imageUrl, description } = this.props;
        const { userIDs, isLoading, error } = this.state;
        const userId = getCookie('userId');
        const isUserInPlaylist = Array.isArray(userIDs) && userIDs.includes(userId);

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div className="border border-black p-4 rounded-lg bg-blue-700 shadow-md text-white flex mx-1">
                <div>
                    <Link to={`/playlist/${id}`} className="block mb-2">
                        <img 
                            src={imageUrl} 
                            alt="Playlist" 
                            className="object-cover rounded-lg mx-auto" 
                            style={{ width: '96px', height: '96px' }} // Inline styles as fallback
                        />
                    </Link>
                </div>
                <div>
                    <Link to={`/playlist/${id}`} className="block text-xl font-semibold text-white hover:text-gray-300">
                        {name}
                    </Link>
                    <p className="text-sm text-gray-300 mt-2">{description}</p>
                    {isUserInPlaylist && (
                        <button
                            onClick={this.handleDelete}
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
                        >
                            Remove from library
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default PlaylistPreview;