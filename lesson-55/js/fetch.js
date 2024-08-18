const btn = document.getElementById("get");

btn.addEventListener("click", () => {
  fetch("your-url")
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
