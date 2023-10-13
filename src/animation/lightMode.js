const switchSlide = document.querySelector("#switch");

switchSlide.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("light");
});
