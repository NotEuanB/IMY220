import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header.js";
import PlaylistComponent from '../components/PlaylistComponent.js';
import EditPlaylist from '../components/EditPlaylist.js';
import ListComments from '../components/ListComments.js';
import EditComment from '../components/EditComment.js';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: null,
            error: null,
        };
    }
    
    async componentDidMount() {
        const { id } = this.props.params;
        await this.fetchPlaylist(id);
    }

    fetchPlaylist = async (id) => {
        try {
            const response = await fetch(`/api/playlist/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.setState({ playlist: data, error: null });
        } catch (error) {
            this.setState({ error: 'Playlist not found' });
            console.log("Error fetching playlist data:", error);
        }
    };

    render() {
        const { playlist, error } = this.state;

        if (error) {
            return <div>{error}</div>;
        }

        if (!playlist) {
            return <div>Loading...</div>;
        }

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

const PlaylistWithParams = (props) => {
    return <Playlist {...props} params={useParams()} />;
};

export default PlaylistWithParams;