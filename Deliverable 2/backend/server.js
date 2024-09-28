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

    app.get('/api/playlists', async (req, res) => {
        try {
            const playlists = await PlaylistCollection.find().toArray();
            res.json(playlists);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.get('/api/users', async (req, res) => {
        try {
            const users = await UserCollection.find().toArray();
            res.json(users);
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