function updateClock(){

    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const clockDisplay = document.getElementById("clockDisplay");

    const timeString = `${hours}:${minutes}:${seconds}`;

    clockDisplay.textContent = timeString
}

updateClock();
setInterval(updateClock, 500)