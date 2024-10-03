const express = require('express');
const { MongoClient } = require('mongodb');

const url = "mongodb+srv://u21439631:aExeTfai05o4TaHm@imy220.jxnkm.mongodb.net/";
const client = new MongoClient(url);

// Create app
const app = express();
app.use(express.json()); 

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

    // This gets a spevific playlist on the playlist ID
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
                hashedPassword,
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
        
        // Send a response indicating successful logout
        res.status(200).send("Logged out successfully");
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
            
            const playlists = await PlaylistCollection.find({ userID: { $in: friends }}).toArray();
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
        console.log(loggedInUserId);
    
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