import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header.js";
import ProfileComponent from '../components/ProfileComponent.js';
import Followers from '../components/Followers.js';
import Following from '../components/Following.js';
import EditProfile from '../components/EditProfile.js';
import CreatePlaylist from '../components/CreatePlaylist.js';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    async componentDidMount() {
        const { id } = this.props.params;
        await this.fetchUser(id);
    }

    fetchUser = async (id) => {
        try {
            const response = await fetch(`/api/users/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.setState({ user: data });
        } catch (error) {
            console.log("Error fetching user data:", error);
        }
    };

    render() {
        const { user } = this.state;

        if (!user) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h1>Profile</h1>
                <Header />
                <ProfileComponent name={ user.name } description={ user.description } imageUrl={ user.imageUrl } playlists={ user.playlists }/>
                <Followers followers={ user.followers }/>
                <Following following={ user.following }/>
                <EditProfile name={ user.name } description={ user.description }/>
                <CreatePlaylist />
            </div>
        );
    }
}

const ProfileWithParams = (props) => {
    return <Profile {...props} params={useParams()} />;
};

export default ProfileWithParams;