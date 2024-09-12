import React from "react";

class EditPlaylist extends React.Component {
    render() {
        const {name, description } = this.props;
        return (
            <div>
                <label htmlFor="name">Edit playlist name</label>
                <input type="text" id="name" value={ name }/>
                <br/>
                <label htmlFor="desc">Edit description</label>
                <input type="text" id="desc" value={ description }/>
                <br/>
                <button type="submit">Edit Playlist</button>
            </div>
        );
    }
}

export default EditPlaylist;