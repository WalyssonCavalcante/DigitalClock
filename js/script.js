const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const day = document.getElementById("day");

let monthName = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const clock = setInterval(function time() {
  let today = new Date();
  let date = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let hours = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  day.innerHTML = `${date} ${monthName[month]} ${year}`;
  hour.textContent = hours;
  minute.textContent = min;
  second.textContent = sec;
});

updateClock();
setInterval(updateClock, 1000);
