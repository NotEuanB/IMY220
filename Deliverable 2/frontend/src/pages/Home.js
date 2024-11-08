import React from 'react';
import Header from "../components/Header.js";
import { Link } from 'react-router-dom';
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
        searchType: null,
        currentView: 'songs', // Add a state variable to keep track of the current view
        showCreateSong: false // Add a state variable to keep track of the visibility of the CreateSong component
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

    toggleCreateSong = () => {
        this.setState(prevState => ({ showCreateSong: !prevState.showCreateSong }));
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
        const { currentView, songs, playlists, showCreateSong } = this.state;
        return (
            <div className="flex-1 p-4">
                <div className="flex justify-center mb-4">
                    <button onClick={() => this.setState({ currentView: 'songs' })} className="mr-2">Songs</button>
                    <button onClick={() => this.setState({ currentView: 'playlists' })}>Playlists</button>
                </div>
                {currentView === 'songs' && <SongFeed songs={songs} />}
                {currentView === 'playlists' && <PlaylistFeed playlists={playlists} />}
                {currentView === 'songs' && (
                    <>
                        <button onClick={this.toggleCreateSong} className="mt-4">
                            {showCreateSong ? 'Cancel' : 'Add New Song'}
                        </button>
                        {showCreateSong && <CreateSong />}
                    </>
                )}
            </div>
        );
    }
    
    render() {
        const { searchResults } = this.state;
        return (
            <div className="flex flex-col min-h-screen">
                <header className="top-0 w-full p-4 flex justify-center z-10">
                    <Link to="/home" className="font-lightning text-8xl">Sparky</Link>
                </header>
                <div className="flex flex-1 pt-32">
                    <div className="w-36 h-full flex flex-col p-4">
                        <Header />
                    </div>
                    <div className="flex-1">
                        <div className="p-4">
                            <SearchInput onSearchResults={this.handleSearchResults} />
                            {searchResults ? this.renderSearchResults() : this.renderDefaultContent()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;