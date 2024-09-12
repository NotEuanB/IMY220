const express = require('express');

// Create app
const app = express();

// Serve static files from the React app
app.use(express.static('./frontend/public'));

// Catch-all route to serve index.html for all pages
app.get('*', (req, res) => {
    res.sendFile('index.html', { root: './frontend/public' });
});

// Port to listen to
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})