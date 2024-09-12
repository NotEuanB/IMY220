import React from "react";

class EditProfile extends React.Component {
    render() {
        const { name, description } = this.props;
        return (
            <form>
                <label htmlFor="name">Edit name here</label>
                <input type="text" id="name" value={ name }/>
                <br/>
                <label htmlFor="desc">Edit name here</label>
                <input type="text" id="desc" value={ description }/>
                <br/>
                <button type="submit">Submit Changes</button>
            </form>
        );
    }
};

export default EditProfile;