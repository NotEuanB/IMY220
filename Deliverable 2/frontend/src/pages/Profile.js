import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header.js";
import ProfileComponent from '../components/ProfileComponent.js';
import Followers from '../components/Followers.js';
import Following from '../components/Following.js';
import EditProfile from '../components/EditProfile.js';
import CreatePlaylist from '../components/CreatePlaylist.js';
import { getCookie } from '../utils/cookie';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            playlists: [],
            followers: [],
            following: [],
            loggedInUserId: null,
        };
    }

    async componentDidMount() {
        const { id } = this.props.params;
        const loggedInUserId = getCookie('userId');
        this.setState({ loggedInUserId });
        await this.fetchUser(id);
        await this.fetchPlaylists(id);
        await this.fetchFollowers(id);
        await this.fetchFollowing(id);
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

    fetchPlaylists = async (id) => {
        try {
            const response = await fetch(`/api/playlists/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.setState({ playlists: data });
        } catch (error) {
            console.log("Error fetching playlists:", error);
        }
    };

    fetchFollowers = async (id) => {
        try {
            const response = await fetch(`/api/users/${id}/followers`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.setState({ followers: data });
        } catch (error) {
            console.log("Error fetching followers:", error);
        }
    };

    fetchFollowing = async (id) => {
        try {
            const response = await fetch(`/api/users/${id}/following`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.setState({ following: data });
        } catch (error) {
            console.log("Error fetching following:", error);
        }
    };

    render() {
        const { user, playlists, followers, following, loggedInUserId } = this.state;

        if (!user) {
            return <div>Loading...</div>;
        }

        const isOwnProfile = user._id === loggedInUserId;

        return (
            <div>
                <h1>Profile</h1>
                <Header />
                <ProfileComponent 
                    userId={user._id}
                    username={user.username} 
                    description={user.description} 
                    imageUrl={user.imageUrl} 
                    playlists={playlists} 
                />
                <Followers followers={followers} />
                <Following following={following} />
                {isOwnProfile && <EditProfile username={user.username} description={user.description} />}
                {isOwnProfile && <CreatePlaylist />}
            </div>
        );
    }
}

const ProfileWithParams = (props) => {
    return <Profile {...props} params={useParams()} />;
};

export default ProfileWithParams;