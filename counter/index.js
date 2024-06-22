const resetButton = document.getElementById("resetbtn");
const addoneButton = document.getElementById("addonebtn");
const subtractoneButton = document.getElementById("subtractonebtn");
const counterDisplay = document.getElementById("counterDisplay");
const square = document.querySelector("div");
let count = 0;

function addonefunction(){
    count++;
    counterDisplay.textContent = count;
};

function subtractone(){
    count--;
    counterDisplay.textContent = count;
};

function reset(){
    count = 0;
    counterDisplay.textContent = count;
};
