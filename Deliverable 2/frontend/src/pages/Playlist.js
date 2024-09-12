import React from 'react';
import Header from "../components/Header.js";
import PlaylistComponent from '../components/PlaylistComponent.js';
import EditPlaylist from '../components/EditPlaylist.js';
import ListComments from '../components/ListComments.js';
import EditComment from '../components/EditComment.js';


class Playlist extends React.Component {
    render() {
        const playlist = {
            name: "Dummy Playlist Name 1",
            description: "This is a dummy playlist description",
            imageUrl: "/assets/images/placeholder.png",
            songs: [
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
            ],
            comments: [
                {
                    author: "Dummy author 1",
                    comment: "This is my first comment"
                },
                {
                    author: "Dummy author 2",
                    comment: "This is my second comment"
                },
                {
                    author: "Dummy author 3",
                    comment: "This is my third comment"
                }
            ]
        };
            


        return (
            <div>
                <h1>Playlist</h1>
                <Header />
                <PlaylistComponent name={ playlist.name } description={ playlist.description } imageUrl={ playlist.imageUrl } songs={ playlist.songs } />
                <EditPlaylist name={ playlist.name } description={ playlist.description }/>
                <ListComments comments={ playlist.comments }/>
                <EditComment />
            </div>
        );
    }
}

export default Playlist;