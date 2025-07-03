let votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0
};

function vote(language) {
    votes[language]++;
    updateVotes();
}

function updateVotes() {
    document.getElementById('jsVotes').textContent = votes.JavaScript;
    document.getElementById('pyVotes').textContent = votes.Python;
    document.getElementById('javaVotes').textContent = votes.Java;
}

updateVotes();