const toggle = document.querySelector(".toggle");
console.log(toggle);
toggle.addEventListener("change", (e) => {
  if (toggle.checked === true) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
