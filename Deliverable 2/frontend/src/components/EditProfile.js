import React from "react";
import { getCookie } from '../utils/cookie';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            description: props.description,
            imageUrl: props.imageUrl
        };
    }

    handleInputChange = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    }

    handleFileChange = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        const userId = getCookie('userId');
        formData.append('profilePicture', file);
        formData.append('userId', userId);
    
        fetch('http://localhost:3000/api/uploadProfilePicture', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.error); });
            }
            return response.json();
        })
        .then(data => {
            console.log('Upload successful:', data);
            this.setState({ imageUrl: data.imageUrl });
        })
        .catch(error => {
            console.error('Error uploading profile picture:', error);
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, description } = this.state;
        const userID = getCookie('userId');

        fetch(`/api/users/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, description })
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.message); });
            }
            return response.json();
        })
        .then(data => {
            console.log('Profile updated successfully:', data);
        })
        .catch(error => {
            console.error('Error updating profile:', error);
        });
    }

    render() {
        const { username, description, imageUrl } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="p-4 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Edit name here</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={this.handleInputChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Edit description here</label>
                    <input 
                        type="text" 
                        id="description" 
                        value={description} 
                        onChange={this.handleInputChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="profilePicture" className="block text-gray-700 font-bold mb-2">Change profile picture</label>
                    <input 
                        type="file" 
                        id="profilePicture" 
                        onChange={this.handleFileChange} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <img src={imageUrl} alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    Submit Changes
                </button>
            </form>
        );
    }
}

export default EditProfile;