import React from "react";
import ProfilePreview from "./ProfilePreview";

class Following extends React.Component {
    state = {
        following: []
    };

    componentDidMount() {
        this.fetchFollowing();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.fetchFollowing();
        }
    }

    fetchFollowing = () => {
        const { userId } = this.props;
        
        fetch(`/api/users/${userId}/following`)
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
                console.error('Error fetching following:', error);
            });
    }

    render() {
        const { following } = this.state;
        return (
            <div className="p-4 rounded-lg shadow-md mt-4">
                <h3 className="text-xl font-semibold mb-2">Following</h3>
                {following.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {following.map((following, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                                <ProfilePreview image={following.imageUrl} username={following.username} userId={following._id}/>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-700">No following available.</p>
                )}
            </div>
        );
    }
}

export default Following;