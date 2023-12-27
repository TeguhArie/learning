const tombol = document.getElementById("btn");

tombol.addEventListener("click", () => {
  if (document.querySelector(".task input").value.length == 0) {
    alert("masukan list");
  } else {
    document.querySelector(".container .isi").innerHTML += 
    `<div class="tugas">
        <span id="namaTugas"> 
          ${document.querySelector(".task input").value}
        </span>
        <button class="delete">x</button>
     </div>`;
  }

  let currentTask = document.querySelectorAll(".delete");
  currentTask.forEach((del) =>{
    del.addEventListener("click", () => {
      del.parentElement.remove();
    })
  })
});
