const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
  const currentDate = new Date();
//   setTimeout(updateClock, 1000); //But here’s the catch: this line is inside the function, which means each time it runs, it schedules itself to run again 1 second later. This is recursive timing.
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  const minuteDeg = (minute / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  const secondDeg = (second / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000); //use any one of the setTimeout and setInterval
