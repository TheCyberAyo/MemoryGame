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
    {name: "tennisball", image: "bee.png"},
    {name: "soccer", image: "bee.png"},
    {name: "American", image: "bee.png"},
    {name: "football", image: "bee.png"},
    {name: "cricket", image: "bee.png"},
    {name: "rugby", image: "bee.png"},
    {name: "volleyball", image: "bee.png"},
    {name: "golfball", image: "bee.png"},
    {name: "marble", image: "bee.png"},
    {name: "netball", image: "bee.png"},
    {name: "squashball", image: "bee.png"},
    {name: "Basketball", image: "bee.png"},
    {name: "Softball", image: "bee.png"},
    {name: "pingpong", image: "bee.png"},
    {name: "", image: "bee.png"}

]