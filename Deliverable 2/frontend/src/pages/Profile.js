import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from "../components/Header.js";
import ProfileComponent from '../components/ProfileComponent.js';
import Followers from '../components/Followers.js';
import Following from '../components/Following.js';
import EditProfile from '../components/EditProfile.js';
import CreatePlaylist from '../components/CreatePlaylist.js';
import { getCookie, deleteCookie } from '../utils/cookie';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            playlists: [],
            followers: [],
            following: [],
            loggedInUserId: null,
            showEditProfile: false,
            showCreatePlaylist: false,
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
        await this.checkFollowingStatus(id, loggedInUserId);
    }

    async componentDidUpdate(prevProps) {
        const { id } = this.props.params;
        if (prevProps.params.id !== id) {
            await this.fetchUser(id);
            await this.fetchPlaylists(id);
            await this.fetchFollowers(id);
            await this.fetchFollowing(id);
            await this.checkFollowingStatus(id, this.state.loggedInUserId);
        }
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

    handleDeleteAccount = async () => {
        const { user, loggedInUserId } = this.state;
        if (user._id !== loggedInUserId) {
            return;
        }

        try {
            const response = await fetch(`/api/user/${user._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'user-id': loggedInUserId,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            deleteCookie('userId');
            window.location.href = '/'; 
        } catch (error) {
            console.log("Error deleting account:", error);
        }
    };

    checkFollowingStatus = async (profileId, loggedInUserId) => {
        try {
            const response = await fetch(`/api/users/${profileId}/isFollowing`, {
                headers: {
                    'user-id': loggedInUserId,
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.setState({ isFollowing: data.isFollowing });
        } catch (error) {
            console.log("Error checking following status:", error);
        }
    };

    toggleEditProfile = () => {
        this.setState((prevState) => ({ showEditProfile: !prevState.showEditProfile }));
    };

    toggleCreatePlaylist = () => {
        this.setState((prevState) => ({ showCreatePlaylist: !prevState.showCreatePlaylist }));
    };

    render() {
        const { user, playlists, followers, following, loggedInUserId, isFollowing, showEditProfile, showCreatePlaylist } = this.state;

        if (!user) {
            return <div>Loading...</div>;
        }

        const isOwnProfile = user._id === loggedInUserId;

        return (
            <div className="flex flex-col min-h-screen">
                <header className="top-0 w-full p-4 flex justify-center z-10">
                    <Link to="/home" className="font-lightning text-8xl">Sparky</Link>
                </header>
                <div className="flex flex-1 pt-32">
                    <div className="w-36 h-full flex flex-col p-4">
                        <Header />
                    </div>
                    <div className="flex-1 p-4">
                        <ProfileComponent 
                            userId={user._id}
                            username={user.username} 
                            description={user.description} 
                            imageUrl={user.imageUrl} 
                            playlists={playlists} 
                            isFollowing={isFollowing}
                            isOwnProfile={isOwnProfile}
                        />
                        <Followers userId={user._id} />
                        <Following userId={user._id} />
                        {isOwnProfile && (
                            <>
                                <button onClick={this.toggleEditProfile} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                    {showEditProfile ? 'Hide Edit Profile' : 'Edit Profile'}
                                </button>
                                {showEditProfile && <EditProfile username={user.username} description={user.description} imageUrl={user.imageUrl} />}
                                <button onClick={this.toggleCreatePlaylist} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                                    {showCreatePlaylist ? 'Hide Create Playlist' : 'Create Playlist'}
                                </button>
                                {showCreatePlaylist && <CreatePlaylist />}
                                <button onClick={this.handleDeleteAccount} className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
                                    Delete account
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const ProfileWithParams = (props) => {
    return <Profile {...props} params={useParams()} />;
};

export default ProfileWithParams;