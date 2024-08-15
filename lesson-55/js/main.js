const axiosInstance = axios.create({
  baseURL: "https://json-api.uz/api/project/my-test-app",
});

// GET REQUEST
function getProducts() {
  // axios({
  //   method: "get",
  //   url: "/products",
  //   params: {
  //     limit: 4,
  //   },
  // })
  //   .then((res) => showOutput(res))
  //   .catch((err) => console.log(err));

  axiosInstance
    .get("/products?limit=4")
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// POST REQUEST
function addProducts() {
  axiosInstance
    .post("/products", {
      name: "iPhone 90",
      category: "Electornics",
      price: 1500,
      brand: "Apple",
    })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// PUT/PATCH REQUEST
function updateProducts() {
  axiosInstance
    .put("/products/10", {
      price: 2000,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// DELETE REQUEST
function removeProducts() {
  axiosInstance
    .delete("/products/10")
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  axiosInstance
    .all([axiosInstance.get("/products/1"), axiosInstance.get("/products/2")])
    .then(axiosInstance.spread((prod1, prod2) => showOutput(prod2)))
    .catch((err) => console.log(err));
}

// SKIP/FILTER
function skipItems() {
  axiosInstance
    .get("/products?category_ne=Electronics")
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// ERROR HANDLING
axiosInstance
  .get("/products")
  .then((response) => {
    // console.log(response.data);
  })
  .catch((error) => {
    if (error.response) {
      // Server responded with a status code outside the range of 2xx
      console.log("Response error:", error.response.data);
      console.log("Status:", error.response.status);
      console.log("Headers:", error.response.headers);
    } else if (error.request) {
      // Request was made but no response was received
      console.error("Request error:", error.request);
    } else {
      // Something else happened while setting up the request
      console.log("Error:", error.message);
    }
    console.log("Config:", error.config);
  });

// file upload
const formEl = document.querySelector("form");
const imageSubmitBtn = document.querySelector("#image-submit");
let imageUrl = "";

imageSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  axiosInstance
    .post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function (response) {
      imageUrl = response.data;
      alert("Image Uploaded Successfuly");
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (imageUrl) {
    axiosInstance
      .post("/products", {
        name: formEl.name.value,
        category: formEl.category.value,
        price: formEl.price.value,
        brand: formEl.brand.value,
        image: imageUrl,
      })
      .then(function (response) {
        showOutput(response);
        console.log(response);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  } else {
    alert("Please, upload any image !");
  }
});

// Event listeners
document.getElementById("get").addEventListener("click", getProducts);
document.getElementById("post").addEventListener("click", addProducts);
document.getElementById("update").addEventListener("click", updateProducts);
document.getElementById("delete").addEventListener("click", removeProducts);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("skip").addEventListener("click", skipItems);

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}
