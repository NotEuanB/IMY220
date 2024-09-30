import React from "react";
import ProfilePreview from "./ProfilePreview";
import { getCookie } from '../utils/cookie';

class Following extends React.Component {
    state = {
        following: []
    };

    componentDidMount() {
        this.fetchFollowing();
    }

    fetchFollowing = () => {
        const userID = getCookie('userId');
        
        fetch(`/api/users/${userID}/following`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ following: data });
            })
            .catch(error => {
                console.error('Error fetching followers:', error);
            });
    }

    render() {
        const { following } = this.state;
        return (
            <div>
                <h3>Following</h3>
                {following.length > 0 ? (
                    following.map((follower, index) => (
                        <div key={index}>
                            <ProfilePreview image={follower.imageUrl} username={follower.username} />
                        </div>
                    ))
                ) : (
                    <p>No following available.</p>
                )}
            </div>
        );
    }
}

export default Following;