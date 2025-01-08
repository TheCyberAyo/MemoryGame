const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstcard = false;
let secondCard = false;

//item array
const items = [
    {name: "tennisball", image: "tennis.png"},
    {name: "american F", image: "American.png"},
    {name: "football", image: "foot ball.png"},
    {name: "cricket", image: "cricket.png"},
    {name: "rugby", image: "rugby.png"},
    {name: "volleyball", image: "volley ball.png"},
    {name: "golfball", image: "golf ball.png"},
    {name: "marble", image: "marble.png"},
    {name: "netball", image: "netball.png"},
    {name: "squashball", image: "squashball.png"},
    {name: "basketball", image: "basket ball.png"},
    {name: "softball", image: "softball.png"},
    {name: "pingpong", image: "pingpong ball.png"},
    {name: "q-ball", image: "q ball.png"},
    {name: "number 8", image: "number 8.png"},
    {name: "gold Marble", image: "gold marble"},
    {name: "moon", image: "moon.png"},
    {name: "earth", image: "earth.png"},
    {name: "gym ball", image: "gym ball.png"},
    {name: "balloon", image: "balloon.png"},
    {name: "dragon ball", image: "dragon ball.png"},
    {name: "time stone", image: "time stone.png"},
    {name: "dumb bell", image: "dumb bell.png"},
    {name: "bowling ball", image: "bowling-ball"},
    {name: "meat ball", image: "meat ball.png"},
    {name: "light bulb", image: "light bulb.png"},
    {name: "rocky ball", image: "rocky ball.png"},
    {name: "sandy ball", image: "sandy ball.png"},
    {name: "fire ball", image: "fire ball.png"},
    {name: "silver ball", image: "silver ball.png"},
    {name: "black ball", image: "black ball.png"},
    {name: "grass ball", image: "grass ball"},
]

// initial time
let seconds = 0,
  minutes = 0;

//initials moves and win count
let movesCount = 0,
  winCount = 0;

//For Timer
const timeGenerator = () => {
    seconds =+ 1;
    //minutes logic
    if(seconds <= 60)
}