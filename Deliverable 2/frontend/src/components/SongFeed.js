import React from "react";
import Song from "./Song";

class SongFeed extends React.Component {
    render() {
        const { songs } = this.props;

        return(
            <div>
                <h2>Song Feed</h2>
                {songs.map((song, index) => (
                  <div key={index}>
                    <Song 
                      title={song.title} 
                      link={song.link} 
                    />
                    <hr />
                  </div>
                ))}
            </div>
        );
    }
};

export default SongFeed;