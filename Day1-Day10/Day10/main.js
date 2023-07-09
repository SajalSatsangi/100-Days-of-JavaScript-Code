(function () {
  const images = ["image-0", "image-1", "image-2", "image-3", "image-4"];

  const buttons = document.querySelectorAll(".button");
  const imgContainer = document.querySelector(".container");
  let count = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.classList.contains("fa-caret-square-o-left")) {
        count = (count - 1 + images.length) % images.length;
      } else if (button.classList.contains("fa-caret-square-o-right")) count = (count + 1) % images.length;
      imgContainer.style.backgroundImage = `url('images/${images[count]}.jpg')`;
    });
  });
})();
