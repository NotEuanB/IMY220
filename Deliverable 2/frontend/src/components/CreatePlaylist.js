import React from "react";

class CreatePlaylist extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="name">Insert playlist name</label>
                <input type="text" id="name" placeholder="Playlist name here..."/>
                <br/>
                <label htmlFor="desc">Insert description</label>
                <input type="text" id="desc" placeholder="Playlist description here..."/>
                <br/>
                <button type="submit">Create Playlist</button>
            </div>
        );
    }
}

export default CreatePlaylist;