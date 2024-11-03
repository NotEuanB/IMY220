import React from "react";
import { getCookie } from '../utils/cookie';

class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            playlistCount: 0
        };
    }

    async componentDidMount() {
        await this.fetchPlaylistCount();
    }

    fetchPlaylistCount = async () => {
        const id = getCookie('userId');
        try {
            const response = await fetch(`/api/${id}/playlists`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.setState({ playlistCount: data.length });
        } catch (error) {
            console.error('Error fetching playlist count:', error);
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const id = getCookie('userId');
        const { name, description, playlistCount } = this.state;
        const playlistName = name || `Playlist ${playlistCount + 1}`;

        try {
            const response = await fetch(`/api/${id}/createplaylist`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: playlistName,
                    description: description
                })
            });
            if (response.ok) {
                console.log('Playlist created successfully');
            } else {
                console.log('Creation failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="p-4 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Insert playlist name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Playlist name here..."
                        value={this.state.name}
                        onChange={this.handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Insert description</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Playlist description here..."
                        value={this.state.description}
                        onChange={this.handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    Create Playlist
                </button>
            </form>
        );
    }
}

export default CreatePlaylist;