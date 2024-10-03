import React from "react";
import { Link } from "react-router-dom";

class PlaylistPreview extends React.Component {
    render() {
        const { id, name, imageUrl, description } = this.props;
        return (
            <div>
                <style>
                    {`
                        a:visited {
                            color: inherit;
                        }
                    `}
                </style>
                <Link to={`/playlist/${id}`}>
                    <img src={imageUrl} alt="Placeholder" style={{ width: '100px' }} />
                </Link>
                <Link to={`/playlist/${id}`} style={{ textDecoration: 'none' }}>
                    <h3>{name}</h3>
                </Link>
                <p>{description}</p>
            </div>
        );
    }
};

export default PlaylistPreview;