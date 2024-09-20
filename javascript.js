function updateClockAndPeakTime() {
    const clockDisplay = document.getElementById('clockDisplay');
    const currentTime = new Date();
    
    const hours = currentTime.getHours();
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    let peakTimeMessage;
    let color;

    if (hours >= 8 && hours < 9) {
        peakTimeMessage = "Low usage";
        color = "green";
    } else if (hours >= 9 && hours < 13) {
        peakTimeMessage = "High usage";
        color = "red";
    } else if (hours >= 13 && hours < 14) {
        peakTimeMessage = "Medium usage";
        color = "yellow";
    } else if (hours >= 14 && hours < 21) {
        peakTimeMessage = "Low usage";
        color = "green";
    } else {
        peakTimeMessage = "Not busy";
        color = "green";
    }

    clockDisplay.textContent = `${formattedTime} - ${peakTimeMessage}`;
    clockDisplay.style.color = color;
}

function startClock() {
    updateClockAndPeakTime(); 
    setInterval(updateClockAndPeakTime, 1000); 
}

window.onload = startClock;
