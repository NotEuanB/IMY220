import React from 'react';
import Header from "../components/Header.js";
import SongFeed from '../components/SongFeed.js';
import PlaylistFeed from '../components/PlaylistFeed.js';
import SearchInput from '../components/SearchInput.js';
import { setCookie, getCookie, deleteCookie } from '../utils/cookie';

class Home extends React.Component {
    state = {
        songs: [],
        playlists: []
    };

    componentDidMount() {
        this.fetchSongs();
        this.fetchPlaylists();      
    }

    fetchSongs = () => {
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

    fetchPlaylists = () => {
        const userId = getCookie('userId');
        fetch(`/api/user/${userId}/following/playlists`)
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
        return (
            <div>
                <h1>Home</h1>
                <Header />
                <SearchInput />
                <SongFeed songs={ this.state.songs } />
                <PlaylistFeed playlists={ this.state.playlists} />
            </div>
        );
    }
}

export default Home;