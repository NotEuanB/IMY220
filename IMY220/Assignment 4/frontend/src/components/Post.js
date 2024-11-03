import React from 'react';
import EditPost from './EditPost.js'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.state = {
            toggled: Array(this.props.posts.length).fill(false),
            posts: this.props.posts
        };
    }

    toggle(index) {
        const postToggle = [...this.state.toggled];
        postToggle[index] = !postToggle[index];
        this.setState({toggled: postToggle});
    }

    updatePost(index, newTitle, newDesc) {
        const updatedPosts = [...this.state.posts];
        updatedPosts[index] = { ...updatedPosts[index], title: newTitle, description: newDesc };

        this.setState({ posts: updatedPosts }, () => {
            this.toggle(index); 
        });
    }

    render() {
        return (
            <div>
                {this.state.posts.map((post, index) => {
                    return (
                        <div>
                            <h2>{post.title}</h2>
                            <p>{post.author}</p>
                            <hr/>
                            <p>{post.description}</p>
                            {this.state.toggled[index] && <EditPost post={post} index={index} updatePost={this.updatePost} />}
                            <button onClick={() => this.toggle(index)}>Edit Post</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Post;