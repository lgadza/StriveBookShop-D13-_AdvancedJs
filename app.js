const container = document.querySelector(".container");
const row = document.querySelector(".row");
const body = document.querySelector("body");
const btns = [];
const books = [];
fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((dataHandler) => {
    // console.log(dataHandler);
    // dataHandler.forEach((book) => console.log(book));
    let count = 0;
    dataHandler.forEach((book) => {
      let div = document.createElement("div");
      div.classList = "book-card col-12 col-sm-6 col-md-4 col-lg-3 px-0 my-5";
      let card = `<div class=" card">
             <img src="${book.img}" class=" w-100 book-img card-img-top">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="book-price">$USD${book.price}</p>
                <p class="book-category">${book.category}</p>
                <p class="card-text"><small class="text-muted">${book.asin}</small></p>
                <iconify-icon icon="material-symbols:remove-shopping-cart-outline-rounded" style="color: red;" width="30" class="d-none"></iconify-icon>
                </div>
                <iconify-icon icon="material-symbols:bookmark-added-sharp" style="color: red;" width="30" class="added-item d-none"></iconify-icon>
                
             </div>
            `;
      let btn = document.createElement("button");
      btn.classList = "btn  mt-3";
      btn.innerText = "Add to Cart";
      btns.push(btn);
      div.innerHTML = card;
      books.push(div);
      div.appendChild(btn);
      row.appendChild(div);
    });
    console.log(count);
    btns.forEach((addBtn) => {
      addBtn.addEventListener("clicked", () => {
        books[i].style.borderColor = "red";
      });
    });
  });

// let addBtns = document.querySelector(".change-color");
// console.log(addBtns);
// addBtns.onclick = function () {
//   addBtns.style.color = "red";
//   console.log("clicked");
// };

// addBtns.addEventListener("click", () => {
//   addBtns.style.color = "red";
//   console.log("clicked");
// });

console.log(books);
// console.log(btns[3]);
//   .then((response) => console.log(response));
btns.forEach((addBtn) => {
  addBtn.addEventListener("clicked", () => {
    books[i].style.borderColor = "red";
  });
});
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", () => {
//     btns[i].style.color = "red";
// console.log("clicked");
//   });
// }
