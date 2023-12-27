function computer() {
  let comp = Math.random();
  if (comp <= 0.34) {
    return "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    return "orang";
  }
  return "semut";
}

function output(player, comp) {
  const count = document.querySelector(".count");
  const count2 = document.querySelector(".count2");
  if (player == comp) {
    return "seri";
  }
  if (player == "gajah") {
    if (comp == "orang") {
      count2.innerHTML = parseInt(count2.innerHTML) + 1;
      return "menang";
    } else {
      count.innerHTML = parseInt(count.innerHTML) + 1;
      return "kalah";
    }
  }
  if (player == "orang") {
    if (comp == "gajah") {
      count.innerHTML = parseInt(count.innerHTML) + 1;
      return "kalah";
    } else {
      count2.innerHTML = parseInt(count2.innerHTML) + 1;
      return "menang";
    }
  }
  if (player == "semut") {
    if (comp == "orang") {
      count.innerHTML = parseInt(count.innerHTML) + 1;
      return "kalah";
    } else {
      count2.innerHTML = parseInt(count2.innerHTML) + 1;
      return "menang";
    }
  }
}

function putar() {
  const img = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  const mulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - mulai > 1000) {
      clearInterval;
      return;
    }
    const random = Math.floor(Math.random() * 3);
    img.setAttribute("src", `../../../img/${gambar[random]}.png`);
  }, 100);
}

const pilih = document.querySelectorAll("li img");
pilih.forEach((pil) => {
  pil.addEventListener("click", () => {
    const spo = document.querySelector(".pilihan");
    const kamu = document.querySelector(".kamu");
    const pilihan = pil.className;
    const pComputer = computer();

    putar();
    spo.innerHTML = "computer memilih: " + pComputer;
    kamu.innerHTML = "anda memilih: " + pilihan;

    setTimeout(() => {
      const hasil = output(pilihan, pComputer);
      const info = (document.querySelector(".info").innerHTML = hasil);
      const imgcomp = document.querySelector(".img-komputer");
      imgcomp.setAttribute("src", `../../../img/${pComputer}.png`);
    }, 1000);
  });
});
