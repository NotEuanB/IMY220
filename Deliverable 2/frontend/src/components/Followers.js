import React from "react";
import ProfilePreview from "./ProfilePreview"

class Followers extends React.Component {
    render() {
        const { followers } = this.props;
        return (
            <div>
                <h3>Followers</h3>
                {followers.map((follower,index) => (
                    <div key={index}>
                        <ProfilePreview image={ follower.imageUrl } name={follower.name} />                    
                    </div>
                ))}
            </div>
        );
    }
};

export default Followers;