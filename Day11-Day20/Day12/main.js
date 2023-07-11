var resultScreen = document.querySelector(".result-screen");
var buttons = document.querySelectorAll(".btn");
var equal = document.querySelector(".btn-equal");
var clear = document.querySelector(".btn-clear");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    resultScreen.value += value;
  });
});

equal.addEventListener("click", function (e) {
  if (resultScreen.value === "") {
    resultScreen.value = "Please enter a number";

    setTimeout(() => {
      resultScreen.value = "";
    }, 2000);
  } else {
    let answer = eval(resultScreen.value);
    resultScreen.value = answer;
  }
});

clear.addEventListener("click", function (e) {
  resultScreen.value = "";
});
