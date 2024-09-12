import React from 'react';
import Header from "../components/Header.js";
import ProfileComponent from '../components/ProfileComponent.js';
import Followers from '../components/Followers.js';
import Following from '../components/Following.js';


class Profile extends React.Component {
    render() {
        const user = 
            {
                name: "Dummy User 1",
                description: "Dummy description 1",
                imageUrl: "/assets/images/placeholder.png",
                playlists: [
                    {
                        title: "Dummy Playlist 1",
                        description: "Dummy description 1",
                        imageUrl: "/assets/images/placeholder.png"
                      },
                      {
                        title: "Dummy Playlist 2",
                        description: "Dummy description 2",
                        imageUrl: "/assets/images/placeholder.png"
                      }
                ],
                followers: [
                    {
                        name: "Dummy 1",
                        imageUrl: "/assets/images/placeholder.png"
                    },
                    {
                        name: "Dummy 2",
                        imageUrl: "/assets/images/placeholder.png"
                    },
                    {
                        name: "Dummy 3",
                        imageUrl: "/assets/images/placeholder.png"
                    }
                ],
                following: [
                    {
                        name: "Dummy 1",
                        imageUrl: "/assets/images/placeholder.png"
                    },
                    {
                        name: "Dummy 2",
                        imageUrl: "/assets/images/placeholder.png"
                    },
                    {
                        name: "Dummy 3",
                        imageUrl: "/assets/images/placeholder.png"
                    }
                ]
            };

        return (
            <div>
                <h1>Profile</h1>
                <Header />
                <ProfileComponent name={ user.name } description={ user.description } imageUrl={ user.imageUrl } playlists={ user.playlists }/>
                <Followers followers={ user.followers }/>
                <Following following={ user.following }/>
            </div>
        );
    }
}

export default Profile;