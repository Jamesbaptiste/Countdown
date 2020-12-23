const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const anni = "23 Nov 2021";

function countdown() {
  const anniversary = new Date(anni);
  const currentDate = new Date();

  const totalseconds = (anniversary - currentDate) / 1000;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const hours = Math.floor(totalseconds / 3600) % 24;
  const days = Math.floor(totalseconds / 3600 / 24);
  const seconds = Math.floor(totalseconds) % 60;


  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}



countdown();

setInterval(countdown, 1000);


