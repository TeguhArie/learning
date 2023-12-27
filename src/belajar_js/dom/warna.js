const tombol = document.getElementById("tombol");

tombol.addEventListener("click", () => {
  // document.body.style.backgroundColor = "lightblue";
  document.body.classList.toggle("biru");
});

const tombolAcak = document.createElement("button");
const text = document.createTextNode("Acak");
tombolAcak.appendChild(text);
tombolAcak.setAttribute("type", "button");
tombol.after(tombolAcak);

tombolAcak.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

const merah = document.querySelector('input[name=merah]');
const hijau = document.querySelector('input[name=hijau]');
const biru = document.querySelector('input[name=biru]');

merah.addEventListener('input', () => {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
hijau.addEventListener('input', () => {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
biru.addEventListener('input', () => {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

document.body.addEventListener('mousemove', (event) => {
    // event.clientX;
    // console.log(window.innerWidth);

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
});
