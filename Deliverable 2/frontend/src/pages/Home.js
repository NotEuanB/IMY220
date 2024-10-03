import React from 'react';
import Header from "../components/Header.js";
import SongFeed from '../components/SongFeed.js';
import PlaylistFeed from '../components/PlaylistFeed.js';
import SearchInput from '../components/SearchInput.js';
import CreateSong from '../components/CreateSong.js';
import { getCookie } from '../utils/cookie';
import Song from '../components/Song';
import PlaylistPreview from '../components/PlaylistPreview';
import ProfilePreview from '../components/ProfilePreview';

class Home extends React.Component {
    state = {
        songs: [],
        playlists: [],
        searchResults: null,
        searchType: null
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

        // Fetch playlists created by users the current user is following
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

    handleSearchResults = (results, type) => {
        this.setState({ searchResults: results, searchType: type });
    }

    renderSearchResults = () => {
        const { searchResults, searchType } = this.state;
        if (!searchResults) return null;

        return (
            <div>
                <h2>Search Results:</h2>
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>
                            {searchType === 'songs' && <Song title={result.title} link={result.link} />}
                            {searchType === 'playlists' && <PlaylistPreview id={result.playlistID} name={result.name} imageUrl={result.imageUrl} description={result.description} />}
                            {searchType === 'users' && <ProfilePreview image={result.imageUrl} username={result.username} />}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    renderDefaultContent = () => {
        return (
            <div>
                <SongFeed songs={this.state.songs} />
                <PlaylistFeed playlists={this.state.playlists} />
                <CreateSong />
            </div>
        );
    }

    render() {
        const { searchResults } = this.state;
        return (
            <div>
                <h1>Home</h1>
                <Header />
                <SearchInput onSearchResults={this.handleSearchResults} />
                {searchResults ? this.renderSearchResults() : this.renderDefaultContent()}
            </div>
        );
    }
}

export default Home;