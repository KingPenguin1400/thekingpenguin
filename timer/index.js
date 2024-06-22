const timerDisplay = document.getElementById("timerDisplay");
const hoursInput = document.getElementById("hoursInput");
const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");
let hours;
let minutes;
let seconds;

function updateTimer(){
    hours = hoursInput;
    let timeString = `${hours}:${minutes}:${seconds}`;
    timerDisplay.textContent = timeString;
    setInterval(updateTimer(), 1000);
};