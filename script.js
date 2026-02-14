const noButton = document.getElementById("no");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
});

document.getElementById("yes").addEventListener("click", () => {
  alert("Sabía que dirías que sí 😍❤️");
});
