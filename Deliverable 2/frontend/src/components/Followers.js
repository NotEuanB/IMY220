import React from "react";
import ProfilePreview from "./ProfilePreview";
import { getCookie } from '../utils/cookie';

class Followers extends React.Component {
    state = {
        followers: []
    };

    componentDidMount() {
        this.fetchFollowers();
    }

    fetchFollowers = () => {
        const userID = getCookie('userId');
        
        fetch(`/api/users/${userID}/followers`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ followers: data });
            })
            .catch(error => {
                console.error('Error fetching followers:', error);
            });
    }

    render() {
        const { followers } = this.state;
        return (
            <div>
                <h3>Followers</h3>
                {followers.length > 0 ? (
                    followers.map((follower, index) => (
                        <div key={index}>
                            <ProfilePreview image={follower.imageUrl} username={follower.username} />
                        </div>
                    ))
                ) : (
                    <p>No followers available.</p>
                )}
            </div>
        );
    }
}

export default Followers;