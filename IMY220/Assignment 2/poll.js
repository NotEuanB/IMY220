class Poll {
    constructor(cats) {
        this.cats = cats;
    }

    vote(name) {
        const cat = this.cats.find(cat => cat.catName == name);
        cat.voteCount++;
    }

    getVotes() {
        return this.cats;
    }

    getTotalVotes() {
        return this.cats.reduce((total, cat) => total += cat.voteCount, 0);
    }
}

module.exports = Poll;