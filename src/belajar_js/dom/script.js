// DOM selection
// ById -> element

// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'black';

// judul.innerHTML = 'js aneh';

// ByTagName -> HTMLcolection

// const prg = document.getElementsByTagName("p");
// for (let i = 0; i <= prg.length; i++) {
//   prg[i].style.backgroundColor = "gray";
//   prg[i].style.textAlign = 'center';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '100px';

// ByClassName -> HTMLcolection

// const p1 = document.getElementsByClassName('paraf1')[0];
// p1.innerHTML = 'aku';

// query selector -> element

// const p4 = document.querySelector('#b p');
// p4.style.color = 'red';
// p4.style.backgroundColor = 'black';
// p4.style.textAlign = 'center';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.color = 'red';

// const p = document.querySelector('p');
// p.innerHTML = 'ini dari';

// querySelectorAll -> nodelist

// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'green';
// }

// mengubah node root

// const section = document.getElementById('b');
// const p4 = section.querySelector('p');
// p4.innerHTML = 'gwejh';

// DOM manipulation

// element manipulation

// innerHTML -> mengubah isi text yang sudah di seleksi

// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>nama</em>";

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'nama';

// .style.propertycss -> mengambil style css

// const judul = document.querySelector('#judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'red';

// .setAttribute -> menhgubah attribute

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'teguh');

// .getAtrribute -> mengambil attribute
// judul.getAttribute('id');

// .removeAttribute -> menghapus attribute

// judul.removeAttribute('name');

// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'name')

// .classList -> manipulasi class

// p2.classList.add('label');

// p2.innerHTML = 'nama gwe';

// p2.classList.remove('label');

// p2.classList.toggle('label');
// p2.classList.toggle('label');

// document.body.classList.toggle('biru-muda');

// p2.classList.item(1);
// p2.classList.replace('p2', 'paraf2');

// node manipulation

// buat element baru
// const p = document.createElement('p');
// const text = document.createTextNode('paragraf baru');

// simpan ke dalam element "p"

// p.appendChild(text);

// simpan tag "p" di akhir section A

// const sectionA = document.getElementById('a');
// sectionA.appendChild(p);

// insertBefore version
// const li = document.createElement('li');
// const textLi = document.createTextNode('ini list baru');
// li.appendChild(textLi);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(li, li2);

// remove = menghapus
// const link = document.getElementsByTagName('a')[0];

// sectionA.removeChild(link);

// replace
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2 = document.createElement('h2');
// const text3 = document.createTextNode('ini ini paragraf 2');
// h2.appendChild(text3);

// sectionB.replaceChild(h2, p4);

// DOM events

// const p3 = document.querySelector(".p3");

// inlineHTML
// function ubahWarna() {
//   p2.style.backgroundColor = "lightblue";
// }

// element method
// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarna;



// addEventListener
// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", () => {
//     const ul = document.querySelector("section#b ul");
//     const liBaru = document.createElement("li");
//     const textLi = document.createTextNode("item baru");
//     liBaru.appendChild(textLi);
//     ul.appendChild(liBaru);

// });





// source lumayan


// button.setAttribute("disabled", "");
// button.setAttribute("enabled", "");