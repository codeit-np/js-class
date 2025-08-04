async function getProducts() {
  let person = {};
  let response = await fetch("https://fakestoreapi.com/products");
  if (response.status == 200) {
    let products = await response.json();
    let result = document.getElementById("result");
    products.forEach((e) => {
      let div = document.createElement("div");
      let strong = document.createElement("strong");
      let img = document.createElement("img");
      strong.innerHTML = e.title;
      img.src = e.image;
      img.height = "100";
      div.style.border = "1px solid black";
      div.style.padding = "10px";
      div.appendChild(img);
      div.appendChild(strong);
      result.appendChild(div);
    });
  }
}

const person = {
  name
};

async function getCourses() {
  const response = await fetch("https://codeit.com.np/api/popular-courses");
  if (response.status == 200) {
    let courses = await response.json();
    let result = document.getElementById("result");
    courses.data.forEach((e) => {
      let div = document.createElement("div");
      let strong = document.createElement("strong");
      let img = document.createElement("img");
      strong.innerHTML = `${e.course_name} - Fee: ${e.price}`;
      img.src = e.featured;
      div.appendChild(img);
      div.appendChild(strong);
      result.appendChild(div);
    });
  }
}
