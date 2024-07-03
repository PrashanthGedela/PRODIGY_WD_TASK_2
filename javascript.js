// script.js
let startTime, updatedTime, difference;
let interval;
let running = false;
let lapNumber = 0;
const display = document.querySelector('.display');
const lapsContainer = document.querySelector('.laps');

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', recordLap);


function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        interval = setInterval(updateTime, 10);
        running = true;
    }
}

function pauseStopwatch() {
    if (running) {
        clearInterval(interval);
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(interval);
    running = false;
    startTime = 0;
    updatedTime = 0;
    display.textContent = '00:00:000';
    lapsContainer.innerHTML = '';
    lapNumber = 0;
}

function updateTime() {
    updatedTime = new Date().getTime() - startTime;
    display.textContent = formatTime(updatedTime);
}

function formatTime(time) {
    let date = new Date(time);
    let minutes = ('0' + date.getUTCMinutes()).slice(-2);
    let seconds = ('0' + date.getUTCSeconds()).slice(-2);
    let milliseconds = ('00' + date.getUTCMilliseconds()).slice(-3);
    return `${minutes}:${seconds}.${milliseconds}`;
}

function recordLap() {
    if (running) {
        lapNumber++;
        let lapTime = formatTime(updatedTime);
        let lapElement = document.createElement('div');
        lapElement.textContent = `Lap ${lapNumber}: ${lapTime}`;
        lapsContainer.appendChild(lapElement);
    }
}





