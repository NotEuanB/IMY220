import React from 'react';

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.post.title,
            description: this.props.post.description
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit() {
        const { index, updatePost } = this.props;
        const { title, description } = this.state;
        updatePost(index, title, description);
    }

    render() {
        const {title, description } = this.state;
        return (
            <div>
                <label htmlFor="title">Post Title</label>
                <br/>
                <input type="text" name="title" value={title} onChange={this.handleInputChange}/>
                <br/>
                <label htmlFor="description">Post Description</label>
                <br/>
                <input type="text" name="description" value={description} onChange={this.handleInputChange}/>
                <button onClick={this.handleSubmit}>Save</button>
            </div>
        );
    }
}

export default EditPost;