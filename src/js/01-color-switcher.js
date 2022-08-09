const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timeoutId = null;


startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);
stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnClick() {
    timeoutId = setInterval(() => {
        const bodyColor = getRandomHexColor();
        document.body.style.backgroundColor = bodyColor;
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function onStopBtnClick() {
    clearInterval(timeoutId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
