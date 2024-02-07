document.addEventListener("click", (event) => {
  if (event.target === document.getElementById("nav")) {
    const nav = document.getElementById("nav");

    const colors = ["red", "blue", "yellow"];

    nav.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const redText = document.getElementById("to-have-red-text");
  redText.style.color = "red";

  // other selectors here
});
