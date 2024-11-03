const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const fileUpload = require('express-fileupload');

const url = "mongodb+srv://u21439631:aExeTfai05o4TaHm@imy220.jxnkm.mongodb.net/";
const client = new MongoClient(url);

// Create app
const app = express();
app.use(express.json()); 
app.use(fileUpload());

// Serve static files from the React app
app.use(express.static('./frontend/public'));

async function startServer() {
    await client.connect();
    console.info("Connected to MongoDB");

    const db = client.db('Project');
    const SongCollection = db.collection('Songs');
    const PlaylistCollection = db.collection('Playlists');
    const UserCollection = db.collection('Users');

    // Get all of the songs in the SONG document
    app.get('/api/songs', async (req, res) => {
        try {
            const songs = await SongCollection.find().sort({ dateAdded: -1 }).toArray();
            res.json(songs);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    // Get a specific user with the given ID
    app.get('/api/users/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UserCollection.findOne({ _id: id });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // This gets the playlists of a specific user
    app.get('/api/playlists/:id', async (req, res) => {
        const { id } = req.params;
        try {
            // Find the user by ID
            const user = await UserCollection.findOne({ _id: id });
            
            if (!user) {
                return res.status(404).send("User not found");
            }
    
            // Get the user's playlist IDs
            const playlistIDs = user.playlistIDs || [];
    
            // Find the playlists by their IDs
            const playlists = await PlaylistCollection.find({ playlistID: { $in: playlistIDs } }).toArray();
    
            res.json(playlists);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    // This gets a specific playlist on the playlist ID
    app.get('/api/playlist/:id', async (req, res) => {
        const { id } = req.params;
        try {
            // Find the user by ID
            const playlist = await PlaylistCollection.findOne({ playlistID: id });
            
            if (!playlist) {
                return res.status(404).send("playlist not found");
            }

    
            res.json(playlist);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    // This finds the songs from the specific playlist with the user ID
    app.get('/api/playlist/:id/songs', async (req, res) => {
        const { id } = req.params;
        try {
            // Find the playlist by ID
            const playlist = await PlaylistCollection.findOne({ playlistID: id });

            if (!playlist) {
                return res.status(404).send("Playlist not found");
            }

            // Assuming the playlist document contains an array of song IDs
            const songIDs = playlist.songIDs || [];

            // Fetch the songs by their IDs
            const songs = await SongCollection.find({ songID: { $in: songIDs } }).toArray();

            res.json(songs);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    // Register
    app.post('/api/register', async (req, res) => {
        const { username, password, email } = req.body;
        try {
            const count = await UserCollection.countDocuments();
            const newId = `user0${count + 1}`;


            const newUser = {
                _id: newId.toString(), 
                description: '', 
                imageUrl: '/assets/images/placeholder.png', 
                username, 
                email,
                password,
                playlistIDs: [],
                followerIDs: [],
                followingIDs: [] };
            await UserCollection.insertOne(newUser);
            res.status(201).send("User registered successfully");
        } catch (err) {
            res.status(500).send(err);
        }
    });

    // Login
    app.post('/api/login', async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await UserCollection.findOne({ email });
            if (!user) {
                return res.status(401).send("Invalid email or password");
            }

            const isPasswordValid = password === user.password;
            if (!isPasswordValid) {
                return res.status(401).send("Invalid email or password");
            }

            res.status(200).json({ userId: user._id.toString() });

        } catch (err) {
            res.status(500).send(err);
        }
    });

    // Logout
    app.post('/api/logout', (req, res) => {
        res.status(200).send("Logged out successfully");
    });

    // Delete logged in user's account
    app.delete('/api/user/:id', async (req, res) => {
        const { id } = req.params;
        const loggedInUserId = req.headers['user-id']; // Assuming user ID is sent in headers
    
        if (id !== loggedInUserId) {
            return res.status(403).json({ message: "You can only delete your own account" });
        }
    
        try {
            const result = await UserCollection.deleteOne({ _id: id });
            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json({ message: "Account deleted successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // Get the playlists of all the users that the logged in user is following
    app.get('/api/user/:userId/following/playlists', async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await UserCollection.findOne({ _id: userId });

            if (!user) {
                return res.status(404).send('User not found');
            }

            const friends = user.followingIDs || [];

            const playlists = await PlaylistCollection.find({ userIDs: { $in: friends }}).toArray();
            res.json(playlists);
        } catch (err) {
            console.error('Error fetching playlists:', err);
            res.status(500).send(err);
        }
    });

    // Get the followers of the logged in user
    app.get('/api/users/:id/followers', async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UserCollection.findOne({ _id: id });
            if (!user) {
                return res.status(404).send("User not found");
            }
    
            const followers = await UserCollection.find({ _id: { $in: user.followerIDs } }).toArray();
            res.json(followers);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    // Get the following of the logged in user
    app.get('/api/users/:id/following', async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UserCollection.findOne({ _id: id });
            if (!user) {
                return res.status(404).send("User not found");
            }
    
            const following = await UserCollection.find({ _id: { $in: user.followingIDs } }).toArray();
            res.json(following);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    // Updates the username / description of the logged in user
    app.put('/api/users/:id', async (req, res) => {
        const { id } = req.params;
        const { username, description } = req.body;
        try {
            const result = await UserCollection.updateOne(
                { _id: id },
                { $set: { username, description } }
            );
            if (result.matchedCount === 0) {
                return res.status(404).json({message: "User not found" });
            }
            res.status(200).json({ message: "Profile updated successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // Updates the playlist name / description of the logged in user
    app.put('/api/playlist/:id', async (req, res) => {
        const { id } = req.params;
        const { name, description } = req.body;
        const loggedInUserId = req.headers['user-id']; // Assuming user ID is sent in cookies or headers
    
        try {
            // Find the playlist and check if the logged-in user is the owner
            const playlist = await PlaylistCollection.findOne({ playlistID: id });
            if (!playlist) {
                return res.status(404).json({ message: "Playlist not found" });
            }
    
            if (!playlist.userID.includes(loggedInUserId)) {
                return res.status(403).json({ message: "You are not the owner of this playlist" });
            }
    
            // Update the playlist
            const result = await PlaylistCollection.updateOne(
                { playlistID: id },
                { $set: { name, description } }
            );
    
            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "Playlist not found" });
            }
    
            res.status(200).json({ message: "Playlist updated successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // Create playlist for logged in user
    app.put('/api/:id/createplaylist', async (req, res) => {
        const { id } = req.params;
        const { name, description } = req.body;

        try {
            const user = await UserCollection.findOne({ _id: id });
            if (!user) {
               return res.status(404).json ({ message: "User not found" });
            }

            const count = await PlaylistCollection.countDocuments();
            const newId = `PL0${count + 1}`;

            const newPlaylist = {
                playlistID: newId.toString(),
                name,
                description, 
                imageUrl: '/assets/images/placeholder.png', 
                comments: [],
                userIDs: [
                    id
                ],
                songIDs: [] };

            await PlaylistCollection.insertOne(newPlaylist);

            await UserCollection.updateOne(
                { _id: id },
                { $push: { playlistIDs: newId.toString() } }
            );

            res.status(201).send("Playlist created successfully");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Remove playlist from logged-in user's library
    app.delete('/api/playlists/:playlistId/remove', async (req, res) => {
        const { playlistId } = req.params;
        const loggedInUserId = req.headers['user-id'];
    
        try {
            const playlist = await PlaylistCollection.findOne({ playlistID: playlistId });
            if (!playlist) {
                return res.status(404).json({ message: "Playlist not found" });
            }
    
            if (!playlist.userIDs.includes(loggedInUserId)) {
                return res.status(403).json({ message: "You do not have this playlist in your library" });
            }
    
            await UserCollection.updateOne(
                { _id: loggedInUserId },
                { $pull: { playlistIDs: playlistId } }
            );
    
            res.status(200).json({ message: "Playlist removed from user library successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Add song to playlist
    app.post('/api/playlists/:playlistId/add', async (req, res) => {
        const { playlistId } = req.params;
        const { trackId } = req.body;
    
        try {
            const playlist = await PlaylistCollection.findOne({ playlistID: playlistId });
            if (!playlist) {
                return res.status(404).json({ message: "Playlist not found" });
            }
    
            await PlaylistCollection.updateOne(
                { playlistID: playlistId },
                { $push: { songIDs: trackId } }
            );

            await SongCollection.updateOne(
                { songID: trackId },
                { $addToSet: { playlistIDs: playlistId } }
            );
    
            res.status(200).json({ message: "Song added to playlist successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Add song to website
    app.put('/api/createsong', async (req, res) => {
        const { title, link } = req.body;
    
        if (!title || !link) {
            return res.status(400).json({ message: 'Title and link are required' });
        }
    
        try {
            const songID = generateSongID(title);
    
            const newSong = {
                songID,
                title,
                link,
                playlistIDs: [],
                userIDs: [],
                dateAdded: new Date()
            };
    
            await SongCollection.insertOne(newSong);
    
            res.status(201).json({ message: 'Song created successfully', song: newSong });
        } catch (error) {
            console.error('Error creating song:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
    
    // Function to generate a songID from the title
    function generateSongID(title) {
        return title
            .split(' ')
            .map(word => word[0].toLowerCase())
            .join('');
    }

    // Delete song form document
    app.delete('/api/songs/:songID', async (req, res) => {
        const { songID } = req.params;
    
        try {
            const result = await SongCollection.deleteOne({ songID });
    
            if (result.deletedCount === 0) {
                return res.status(404).json({ message: 'Song not found' });
            }
    
            res.status(200).json({ message: 'Song deleted successfully' });
        } catch (error) {
            console.error('Error deleting song:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });

    // Search all
    app.get('/api/search', async (req, res) => {
        const { term, type } = req.query;
    
        try {
            let results;
            switch (type) {
                case 'playlists':
                    results = await PlaylistCollection.find({ name: { $regex: term, $options: 'i' } }).toArray();
                    break;
                case 'songs':
                    results = await SongCollection.find({ title: { $regex: term, $options: 'i' } }).toArray();
                    break;
                case 'users':
                    results = await UserCollection.find({ username: { $regex: term, $options: 'i' } }).toArray();
                    break;
                default:
                    return res.status(400).json({ message: 'Invalid search type' });
            }
            res.status(200).json(results);
        } catch (error) {
            console.error('Error searching:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });

    // Uploading and changing profile picture
    app.post('/api/uploadProfilePicture', async (req, res) => {
        if (!req.files || Object.keys(req.files).length === 0) {
            console.error('No files were uploaded.');
            return res.status(400).json({ error: 'No files were uploaded.' });
        }

        const userId = req.body.userId;
        const profilePicture = req.files.profilePicture;


        const filePath = path.join(__dirname, '../../frontend/public/assets/images', `${userId}-${Date.now()}${path.extname(profilePicture.name)}`);
        console.log('File Path:', filePath);

        try {
            profilePicture.mv(filePath, async (err) => {
                if (err) {
                    console.error('Error moving file:', err);
                    return res.status(500).json({ error: err.message });
                }

                const imageUrl = `/assets/images/${path.basename(filePath)}`;
                console.log('Image URL:', imageUrl);

                await UserCollection.updateOne(
                    { _id: userId },
                    { $set: { imageUrl } }
                );

                res.status(200).json({ imageUrl });
            });
        } catch (err) {
            console.error('Error uploading profile picture:', err);
            res.status(500).json({ error: err.message });
        }
    });

    // Check if the logged-in user is following the profile they are viewing
    app.get('/api/users/:id/isFollowing', async (req, res) => {
        const { id } = req.params;
        const loggedInUserId = req.headers['user-id'];

        try {
            const user = await UserCollection.findOne({ _id:loggedInUserId, followingIDs: id });
            if (user) {
                return res.status(200).json({ isFollowing: true });
            } else {
                return res.status(200).json({ isFollowing: false });
            }
        } catch (err) {
            console.error('Error checking following status:', err);
            res.status(500).json({ error: err.message });
        }
    });

    // Catch-all route to serve index.html for all pages
    app.get('*', (req, res) => {
        res.sendFile('index.html', { root: './frontend/public' });
    });

    // Port to listen to
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
};

startServer();