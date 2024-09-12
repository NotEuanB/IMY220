import React from 'react';
import Header from "../components/Header.js";
import SongFeed from '../components/SongFeed.js';
import PlaylistFeed from '../components/PlaylistFeed.js';
import SearchInput from '../components/SearchInput.js';

class Home extends React.Component {
    render() {
        const songsData = [
            {
                title: "Dummy Song Title 1",
                link: "www.dummylink1.co.za",
                imageUrl: "/assets/images/placeholder.png"
            },
            {
                title: "Dummy Song Title 2",
                link: "www.dummylink2.co.za",
                imageUrl: "/assets/images/placeholder.png"
            },
            {
                title: "Dummy Song Title 3",
                link: "www.dummylink3.co.za",
                imageUrl: "/assets/images/placeholder.png"
            },
            {
                title: "Dummy Song Title 4",
                link: "www.dummylink4.co.za",
                imageUrl: "/assets/images/placeholder.png"
            },
            {
                title: "Dummy Song Title 5",
                link: "www.dummylink5.co.za",
                imageUrl: "/assets/images/placeholder.png"
            }
        ];
        const playlistData = [
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

        return (
            <div>
                <h1>Home</h1>
                <Header />
                <SearchInput />
                <SongFeed songs={ songsData } />
                <PlaylistFeed playlists={ playlistData } />
            </div>
        );
    }
}

export default Home;