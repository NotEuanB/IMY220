var socket = io();

socket.on('connect', () => {
    console.log('I connected with ID: ', socket.id);
});

let counter = 0;
const form = document.getElementById('poll');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('total-votes').innerHTML = ++counter;
    socket.emit('catName', document.querySelector('input[name="catName"]:checked').value);
});

socket.on('updateCounter', updateCounter => {
    console.log(updateCounter.catName);
    document.querySelector(`label[for="${updateCounter.catName}"] span`).innerHTML = updateCounter.voteCount;
});

socket.on('currentVotes', votes => {
    votes.forEach(vote => {
        document.querySelector(`label[for="${vote.catName}"] span`).innerHTML = vote.voteCount;
    });
});