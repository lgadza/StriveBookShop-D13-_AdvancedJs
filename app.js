const container = document.querySelector(".container");
const row = document.querySelector(".row");
const body = document.querySelector("body");
const books = [];
fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((dataHandler) => {
    // console.log(dataHandler);
    // dataHandler.forEach((book) => console.log(book));
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
                <button class="btn btn-skip ">Skip</button>
                <iconify-icon icon="material-symbols:remove-shopping-cart-outline-rounded" style="color: red;" width="30" class="d-none"></iconify-icon>
                </div>
                <iconify-icon icon="material-symbols:bookmark-added-sharp" style="color: red;" width="30" class="added-item d-none"></iconify-icon>
                
             </div>
            `;
      const btns = [];
      const iconify = [];
      //   let added = document.querySelector(".added-item");

      let skipBtn = document.querySelector(".btn-skip");
      //   iconify.push(added);
      //   console.log(skipBtn);

      let btn = document.createElement("button");
      btn.classList = "btn  mt-3";
      btn.innerText = "Add to Cart";
      btns.push(btn);
      div.innerHTML = card;
      books.push(div);
      div.appendChild(btn);
      row.appendChild(div);
      //   for (let i = 0; i < btns.length; i++) {
      //     btns[i].addEventListener("click", () => {
      //       iconify[i].style.borderColor = "red";
      //     });
      //   }
      //   return `${added} ${btn}`;
      btn.addEventListener("click", () => {
        let added = document.querySelector(".added-item");
        added.classList.remove("d-none");
        console.log("clicked");
      });

      //   skipBtn.addEventListener("click", () => {
      //     div.classList = "d-none";
      //   });
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
// btns.forEach((addBtn) => {
//   addBtn.addEventListener("clicked", () => {
//     books[i].style.borderColor = "red";
//   });
// });
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", () => {
//     btns[i].style.color = "red";
// console.log("clicked");
//   });
// }
let search = document.querySelector(".search-btn");
// search.addEventListener("keydown", () => {
//   console.log(search.value);
// });

console.log(search);
// function filterSearch() {
fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((dataSearch) => {
    // console.log(dataSearch);
    let bookTitles = [];
    for (let i = 0; i < dataSearch.length; i++) {
      let title = dataSearch[i].title;
      bookTitles.push(title);
    }
    search.addEventListener("keypress", () => {
      container.innerHTML = "";
      console.log(search.value);
      if (search.value.length >= 3) {
        //let searchResults = bookTitles.filter((partialTitle) => {
        //partialTitle.includes(search.value);
        // });
        let searchResults = function () {
          for (let i = 0; i < bookTitles.length; i++) {
            if (bookTitles[i].includes(String(search.value))) {
              //   console.log(bookTitles[i]);
              let div = document.createElement("div");
              div.classList =
                "book-card col-12 col-sm-6 col-md-4 col-lg-3 px-0 my-5";
              let card = `<div class=" card">
             <img src="${bookTitles[i].img}" class=" w-100 book-img card-img-top">
              <div class="card-body">
                <h5 class="card-title">${bookTitles[i].title}</h5>
                <p class="book-price">$USD${bookTitles[i].price}</p>
                <p class="book-category">${bookTitles[i].category}</p>
                <p class="card-text"><small class="text-muted">${bookTitles[i].asin}</small></p>
                <button class="btn btn-skip ">Skip</button>
                <iconify-icon icon="material-symbols:remove-shopping-cart-outline-rounded" style="color: red;" width="30" class="d-none"></iconify-icon>
                </div>
                <iconify-icon icon="material-symbols:bookmark-added-sharp" style="color: red;" width="30" class="added-item d-none"></iconify-icon>
                
             </div>
            `;
              div.innerHTML = card;
              //   books.push(div);
              //   div.appendChild(btn);
              row.appendChild(div);
            }
          }
        };
        console.log(searchResults());
      }
    });
    // console.log(bookTitles);
    // if (search.value.length >= 3) {
    //   let searchResults = bookTitles.filter((partialTitle) => {
    //     partialTitle.includes(String(partialTitle));
    //   });
    //   console.log(searchResults);
    //   search.addEventListener("keydown", () => {
    //     console.log(search.value);
    //   });
    //   for (let i = 0; i < bookTitles.length; i++) {}
    // }
  });
//   .then((dataHandler) => {

// });
// }
// filterSearch();
