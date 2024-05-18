const timerElement = document.querySelector('.timer');
let startTime = 0;
let elapsedTime = 0;

function updateTimerText() {
  const milliseconds = Math.floor(elapsedTime % 1000);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor(elapsedTime / (1000 * 60));
  timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}

timerElement.addEventListener(onclick, () => {
  startTime = Date.now();
  elapsedTime = 0;

  const interval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateTimerText();
  }, 10);

  timerElement.addEventListener(m, () => {
    clearInterval(interval);
  });
});

updateTimerText();
