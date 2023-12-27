const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (e.target.className == "thumb") {
    const src = e.target.getAttribute("src");
    const big = document.querySelector(".big")
    big.setAttribute("src", src);
    big.classList.add("fade");
    setTimeout(() => {
      big.classList.remove("fade");
    }, 500);
    const thumb = document.querySelectorAll(".thumb");
    thumb.forEach(thumb => {
        if(thumb.classList.contains("active")){
            thumb.classList.remove("active");
        }
    });

    e.target.classList.add("active");
  }
});
