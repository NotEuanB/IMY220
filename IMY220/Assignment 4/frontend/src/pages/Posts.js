import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';

const postsArr = [
    {
        title: "Growing Your First Vegetable Garden",
        author: "Emma Stone",
        description: "A beginner's guide to planting and harvesting your own vegetables.",
    },
    {
        title: "Indoor Plant Care Tips",
        author: "James Miller",
        description: "How to keep your indoor plants thriving with minimal effort.",
    },
    {
        title: "Composting for Beginners",
        author: "Sarah Brown",
        description: "Learn how to create nutrient-rich compost for your garden.",
    },
    {
        title: "Creating a Pollinator-Friendly Garden",
        author: "Michael Green",
        description: "Tips on attracting bees, butterflies, and other pollinators to your garden.",
    },
    {
        title: "Seasonal Flower Gardening",
        author: "Linda Johnson",
        description: "A guide to planting flowers that bloom beautifully throughout the year.",
    },
];


class Posts extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Posts Page!</h1>
                <nav>
                    <Link to="/" style={{ padding: '5px' }}>
                        Home
                    </Link>
                    <Link to="/posts"style={{ padding: '5px' }}>
                        Posts
                    </Link>
                </nav>
                <Post posts={postsArr}/>
            </div>
        );
    }
}

export default Posts;