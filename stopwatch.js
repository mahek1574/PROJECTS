// stopwatch

let second = 0;
let minute = 0;
let hour = 0;

document.getElementById("display").innerHTML = `${hour
  .toString()
  .padStart(2, 0)}:${minute.toString().padStart(2, "0")}:${second
  .toString()
  .padStart(2, "0")}`;

document.getElementById("start").addEventListener("click", () => {
  timer = setInterval(() => {
    second++;
    // console.log(second);
    if (second === 60) {
      second = 0;
      minute++;
      // console.log("minute" + minute)
    }

    if (minute === 60) {
      minute = 0;
      hour++;
    }

    document.getElementById("display").innerHTML = `${hour
      .toString()
      .padStart(2, 0)}:${minute.toString().padStart(2, "0")}:${second
      .toString()
      .padStart(2, "0")}`;
  }, 1000);
});
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  second = 0;
  minute = 0;
  hour = 0;
  document.getElementById("display").innerHTML = `${hour
    .toString()
    .padStart(2, 0)}:${minute.toString().padStart(2, "0")}:${second
    .toString()
    .padStart(2, "0")}`;
});
