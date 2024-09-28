import React from 'react';
import Header from "../components/Header.js";
import SongFeed from '../components/SongFeed.js';
import PlaylistFeed from '../components/PlaylistFeed.js';
import SearchInput from '../components/SearchInput.js';

class Home extends React.Component {
    state = {
        songs: [],
        playlistData: [
            {
                title: "Dummy Playlist 1",
                description: "Dummy description 1",
                imageUrl: "/assets/images/placeholder.png"
              },
              {
                title: "Dummy Playlist 2",
                description: "Dummy description 2",
                imageUrl: "/assets/images/placeholder.png"
              },
              {
                title: "Dummy Playlist 3",
                description: "Dummy description 3",
                imageUrl: "/assets/images/placeholder.png"
              },
              {
                title: "Dummy Playlist 4",
                description: "Dummy description 4",
                imageUrl: "/assets/images/placeholder.png"
              },
              {
                title: "Dummy Playlist 5",
                description: "Dummy description 5",
                imageUrl: "/assets/images/placeholder.png"
              }
        ]
    };

    componentDidMount() {
        fetch('/api/songs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ songs: data });
            })
            .catch(error => {
                console.error('Error fetching songs:', error);
            });
    }


    render() {
        return (
            <div>
                <h1>Home</h1>
                <Header />
                <SearchInput />
                <SongFeed songs={ this.state.songs } />
                <PlaylistFeed playlists={ this.state.playlistData } />
            </div>
        );
    }
}

export default Home;