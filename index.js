const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.body,
};

let idInterval = null;

refs.startBtn.addEventListener("click", onStart);
refs.stopBtn.addEventListener("click", onStop);

function onStart() {
  console.log("Клик старт!");

  idInterval = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);

  // idInterval = setInterval(() => {
  //   refs.body.style.backgroundColor = randomColor();
  // }, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onStop() {
  console.log("Клик стоп!");
  clearInterval(idInterval);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// function randomColor() {
//   return `rgb(${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(
//     0,
//     255
//   )}, ${randomIntegerFromInterval(0, 255)})`;
// }
