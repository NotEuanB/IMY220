import React from "react";
import ProfilePreview from "./ProfilePreview"

class Following extends React.Component {
    render() {
        const { following } = this.props;
        return (
            <div>
                <h3>Following</h3>
                {following.map((following,index) => (
                    <div key={index}>
                        <ProfilePreview image={ following.imageUrl } name={ following.name } />                    
                    </div>
                ))}
            </div>
        );
    }
};

export default Following;