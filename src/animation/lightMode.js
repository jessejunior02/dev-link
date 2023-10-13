const switchSlide = document.querySelector("#switch");

switchSlide.addEventListener("click", () => {
  const body = document.body;
  if (body.classList.contains("light")) {
    body.classList.remove("light");
  } else {
    body.classList.add("light");
  }
});
