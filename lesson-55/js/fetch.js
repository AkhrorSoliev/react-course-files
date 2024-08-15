const btn = document.getElementById("get");

btn.addEventListener("click", () => {
  fetch("https://json-api.uz/api/project/test-app/books")
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
