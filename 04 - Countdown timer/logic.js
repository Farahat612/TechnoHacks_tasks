let timer;
let totalSeconds = 0;
let isPaused = false;

function startTimer() {
    if (!timer) {
        const hoursInput = document.getElementById("hours");
        const minutesInput = document.getElementById("minutes");
        const secondsInput = document.getElementById("seconds");

        const hours = parseInt(hoursInput.value, 10) || 0;
        const minutes = parseInt(minutesInput.value, 10) || 0;
        const seconds = parseInt(secondsInput.value, 10) || 0;

        totalSeconds = hours * 3600 + minutes * 60 + seconds;

        if (totalSeconds > 0) {
            isPaused = false;
            updateDisplay();
            timer = setInterval(updateTimer, 1000);
        } else {
            alert("Please enter a valid time.");
        }
    }
}

function updateTimer() {
    if (!isPaused && totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
    } else {
        clearInterval(timer);
        timer = null;
    }
}

function pauseTimer() {
    isPaused = true;
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;
    isPaused = false;
    updateDisplay();
}

function resetTimer() {
    stopTimer();
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
}

function updateDisplay() {
    const display = document.getElementById("display");
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}
