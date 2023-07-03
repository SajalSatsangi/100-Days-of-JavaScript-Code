const decreaseCounter = document.querySelector(".decrease");
const increseCounter = document.querySelector(".increase");
timestamp = document.querySelector(".timestamp");
var num = 0;

if (num < 0) {
  timestamp.style.color = "#ffc107";
} else if (num > 0) {
  timestamp.style.color = "#198754";
}

decreaseCounter.addEventListener("click", () => {
  num--;
  timestamp.textContent = num;
  if (num < 0) timestamp.style.color = "#ffc107";
  else if (num == 0) timestamp.style.color = "#fff";
});

increseCounter.addEventListener("click", () => {
  num++;
  timestamp.textContent = num;
  if (num > 0) timestamp.style.color = "#198754";
  else if (num == 0) timestamp.style.color = "#fff";
});
