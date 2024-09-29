const express = require('express');
const { MongoClient } = require('mongodb');

const url = "mongodb+srv://u21439631:aExeTfai05o4TaHm@imy220.jxnkm.mongodb.net/";
const client = new MongoClient(url);

// Create app
const app = express();

// Serve static files from the React app
app.use(express.static('./frontend/public'));

async function startServer() {
    await client.connect();
    console.info("Connected to MongoDB");

    const db = client.db('Project');
    const SongCollection = db.collection('Songs');
    const PlaylistCollection = db.collection('Playlists');
    const UserCollection = db.collection('Users');

    app.get('/api/songs', async (req, res) => {
        try {
            const songs = await SongCollection.find().toArray();
            res.json(songs);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.get('/api/playlist/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const playlist = await PlaylistCollection.findOne({ playlistID: id });
            if (playlist) {
                res.json(playlist);
            } else {
                res.status(404).send("Playlist not found");
            }
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.get('/api/users/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UserCollection.findOne({ id: id });
            if (user) {
                res.json(user);
            } else {
                res.status(404).send("User not found");
            }
        } catch (err) {
            res.status(500).send(err);
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