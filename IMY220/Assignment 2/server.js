const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Poll = require('./poll');

let cats = [
    {catName : "pebble", voteCount : 0},
    {catName : "sunshine", voteCount : 0},
    {catName : "miso", voteCount : 0},
    {catName : "panko", voteCount : 0},
    {catName : "snowball", voteCount : 0}
];

const poll = new Poll(cats);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(__dirname + '/index.js');
});

http.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});



io.on('connection', socket => {
    console.log('A user has connected with ID: ', socket.id);
    sendCurrentVotes(socket);

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

    catCount(socket);
});

const catCount = (socket) => {
    socket.on('catName', catName => {
        poll.vote(catName);
        const votes = poll.getVotes();
        const catVote = votes.find(vote => vote.catName == catName);
        io.emit('updateCounter', {catName : catName, voteCount : catVote.voteCount});
        sendCurrentVotesToAll();
    });
}

const sendCurrentVotes = (socket) => {
    const votes = poll.getVotes();
    socket.emit('currentVotes', votes);
}

const sendCurrentVotesToAll = () => {
    const votes = poll.getVotes();
    io.emit('currentVotes', votes);
}