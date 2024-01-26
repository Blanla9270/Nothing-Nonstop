let isRunning = false;
let startTime;
let interval;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        startStopButton.textContent = 'Start';
    } else {
        startTime = startTime || Date.now();
        interval = setInterval(updateDisplay, 10);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    isRunning = false;
    startTime = null;
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor((currentTime % 1000) / 10);

    const displayText = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds)}`;
    display.textContent = displayText;
}

function padNumber(number) {
    return number.toString().padStart(2, '0');
}





