import React from 'react';

class CreateSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            link: '',
            message: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const { title, link } = this.state;
        const newSong = { title, link };

        try {
            const response = await fetch('/api/createsong', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSong),
            });

            if (response.ok) {
                this.setState({
                    title: '',
                    link: '',
                    message: 'Song created successfully!'
                });
            } else {
                const errorData = await response.json();
                this.setState({ message: `Error: ${errorData.message}` });
            }
        } catch (error) {
            this.setState({ message: `Error: ${error.message}` });
        }
    };

    render() {
        const { title, link, message } = this.state;

        return (
            <div className="max-w-md ml-6 p-6 border border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Create a New Song</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Spotify Link:</label>
                        <input
                            type="text"
                            name="link"
                            value={link}
                            onChange={this.handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                        Create Song
                    </button>
                </form>
                {message && <p className={`mt-4 ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
            </div>
        );
    }
}

export default CreateSong;