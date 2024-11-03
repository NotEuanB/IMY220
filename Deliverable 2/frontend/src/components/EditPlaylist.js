import React from "react";
import { getCookie } from '../utils/cookie';

class EditPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description
        };
    }

    handleInputChange = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, description } = this.state;
        const userID = getCookie('userId');
        const { playlistID } = this.props;

        fetch(`/api/playlist/${playlistID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'user-id': userID 
            },
            body: JSON.stringify({ name, description })
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.message); });
            }
            return response.json();
        })
        .then(data => {
            console.log('Playlist updated successfully:', data);
        })
        .catch(error => {
            console.error('Error updating playlist:', error);
        });
    }

    render() {
        const { name, description } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="p-4 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Edit playlist name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={this.handleInputChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Edit description</label>
                    <input 
                        type="text" 
                        id="description" 
                        value={description} 
                        onChange={this.handleInputChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    Submit Changes
                </button>
            </form>
        );
    }
}

export default EditPlaylist;