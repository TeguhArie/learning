// const card = document.querySelector(".card");
// const close = card.querySelector(".close");

// close.addEventListener("click", () => {
//     card.style.display = "none";
// })

// const close = document.querySelectorAll(".close");
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener("click", (e) => {
//         // close[i].parentElement.style.display = "none";
//         e.target.parentElement.style.display = "none";
//     });

// }

// close.forEach((c) => {
//     c.addEventListener("click", (e) => {
//         // close[i].parentElement.style.display = "none";
//         e.target.parentElement.style.display = "none";
//         e.preventDefault();
//         e.stopPropagation();
//     })

// });

// const card = document.querySelectorAll(".card");
// card.forEach((card)=> {
//     card.addEventListener("click", (e) => {
//         alert("okeh");
//     })
// });

// const nama = document.querySelector(".nama");
// console.log(nama.previousElementSibling);

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
