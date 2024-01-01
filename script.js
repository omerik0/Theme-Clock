const calipersSecond = document.querySelector(".second");
const calipersMinute = document.querySelector(".minute");
const calipersHour = document.querySelector(".hour");
const timeEl = document.querySelector(".curTime");
const dateEl = document.querySelector(".date");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function secondsMovement() {
  const now = new Date();
  const day = now.getDay();
  const date = now.getDate();
  const month = now.getMonth();
  let hour = getTime("hours");
  let min = getTime("minutes");
  let sec = getTime("seconds");

  calcSec(sec);
  calcMin(min);
  calcHours(hour);
  setInterval(() => {
    let hour = getTime("hours");
    let min = getTime("minutes");
    let sec = getTime("seconds");
    calcSec(sec);
    calcMin(min);
    calcHours(hour);
    timeEl.innerHTML = `<h1>${hour}:${min < 10 ? `0${min}` : min} ${
      hour < 12 ? "AM" : "PM"
    } </h1>`;

    dateEl.innerHTML = ` <p>${weekdays[day]},${monthNames[month]} <span class="circle">${date}</span></p>`;
  }, 1000);
}
secondsMovement();

function getTime(unit) {
  const now = new Date();
  if (unit === `seconds`) return now.getSeconds();
  if (unit === `minutes`) return now.getMinutes();
  if (unit === `hours`) return now.getHours();
}

// 360/24

function calcSec(sec) {
  let deg = 90 + sec * 6;
  return (calipersSecond.style.transform = `rotate(${deg}deg)`);
}

function calcMin(min) {
  let deg = 90 + min * 6;
  return (calipersMinute.style.transform = `rotate(${deg}deg)`);
}

function calcHours(hour) {
  let deg = 90 + hour * (360 / 12);

  return (calipersHour.style.transform = `rotate(${deg}deg)`);
}
btn.addEventListener("click", () => body.classList.toggle("active"));
