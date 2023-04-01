let homeScore = document.getElementById("home-score");
homeScore.textContent = 0;

let guestScore = document.getElementById("guest-score")
guestScore.textContent = 0;



function addOneHome() {
    homeScore.textContent = +homeScore.textContent + 1;
}

function addTwoHome() {
    homeScore.textContent = +homeScore.textContent + 2;
}

function addThreeHome() {
    homeScore.textContent = +homeScore.textContent + 3;
}

function addOneGuest() {
    guestScore.textContent = +guestScore.textContent + 1;
}

function addTwoGuest() {
    guestScore.textContent = +guestScore.textContent + 2;
}

function addThreeGuest() {
    guestScore.textContent = +guestScore.textContent + 3;
}