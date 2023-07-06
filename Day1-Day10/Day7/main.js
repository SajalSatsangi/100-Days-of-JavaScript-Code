function modeChanger() {
  var body = document.querySelector("body");

  body.classList.toggle("dark-mode");
}

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removingActiveClass();
    panel.classList.add("active");
  });
});

function removingActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
