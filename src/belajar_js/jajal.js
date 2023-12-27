// let arr = ["jen", "jen2"];
// arr.push("jen3", "jen4", "jen5");

// delete arr[1];

// for(let i = 0; i <= arr.length; i++){
//     console.log(i);
// }

// let firsName = null;



// let counter = 1;
// while(true){
//     console.log(`${counter}`);
//     counter++;

//     if(counter > 5){
//         break;
//     }
// }

// for (let i = 1; i <= 20; i++){
//     if(i % 2 === 1){
//         continue;
//     }
//     console.log(`${i}`);
// }

// loopi: for (let i = 0; i < 10; i++) {
//   loopj: for (let j = 0; j < 100; j++) {
//     if(j > 10){
//         continue loopi;
//     }
//     console.log(`${i} - ${j}`);
//   }
// }

// const person = {
//     firsName : "teguh",
//     middleName : "arief",
//     lastName : "santoso"
// };

// for(const property in person){
//     console.log(`${property} : ${person[property]}`);
// }

// const name = ["teguh", "arief", "santoso"];

// for(const index in name){
//     console.log(`${index} : ${name[index]}`);
// }

// const fullName = "teguh arief";
// for(const character of fullName){
//     console.log(`${character}`);
// }

// function sayHelloWorld() {
//   for(let i = 0; i < 10; i++){
//     console.log(["hello world!!"] + "");
//   }
// };

// sayHelloWorld();

// function name(firsName, lastName) {
//   console.log(`hello ${firsName} ${lastName}`);
// }

// name("teguh");

// function say(firsName, lastName) {
//   const say = `hello ${firsName} ${lastName}`;
//   return say;
// }

// const result = say("teguh", "santoso");
// console.log(`${result}`);

// function finalValue(value) {
//   if (value > 90) {
//     return "a";
//   } else if (value > 80) {
//     return "b";
//   } else if (value > 70) {
//     return "c";
//   } else if (value > 60) {
//     return "d";
//   } else {
//     return "e";
//   }
// }

// const Value = finalValue(78);
// console.log(Value);

// function isContains(array, searchValue) {
//   for (const element of array) {
//     if (element === searchValue) {
//       return true;
//     }
//   }
//   return false;
// }

// const array = [1, 24, 44, 44, 55, 63, 65, 6542, 245432, 5223];
// const search = 1;
// const found = isContains(array, search);
// console.log(found);

// function sum(name, ...data) {
//   let total = 0;
//   for (const item of data) {
//     total += item;
//   }
//   console.log(`total ${name} is ${total}`);
// }

// sum("orange", 2, 3, 4, 6, 7, 8);
// sum("apple", 5, 5, 6, 7, 5, 6);
// sum("banana", 9, 5, 2, 3, 4);

// function sayHello(name){
//   console.log("hello" + name);
// }

// const say = sayHello;
// sayHello("teguh");
// say("teguh");

// function giveName(callback){
//   callback("teguh");
// }
// giveName(sayHello)
// giveName(say);

// const say = function (name) {
//   console.log("hello" + name);
// };
// say("teguh");
// say("teguh");

// function giveMeName(callback) {
//   callback("teguh");
// }

// giveMeName(say);

// giveMeName(function (name) {
//   console.log("hi" + name);
// });

// function outer() {
//   function inner() {
//     console.log("inner");
//   }
//   inner();
//   inner();
// }

// outer();

// let counter = 0;

// function hitMe() {
//   counter++;
// }

// hitMe();
// hitMe();
// console.log(counter);

// function first() {
//   let pertama = "first";
//   console.log(pertama);
// }

// function second() {
//   let kedua = "second";
//   console.log(kedua);
// }
// first();
// second();

// recursive function

// const angka = 14; () => {
//     const strnig = angka;
//     for(let i = 0; i < angka.lenght; angka++){
//         if(i === 4){
//             break;
//         }
//     }
//     console.log(i + "gwejh");
// };

// string();

// function factorial(value){
//     let result = 1;
//     for(let i = 1; i <= value; i++ ){
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(7));
// console.log(1 * 2 * 3 * 4 * 5 * 6 * 7);

// function factorialRcursive(value) {
//   if (value === 1) {
//     return 1;
//   } else {
//     return value * factorialRcursive(value - 1);
//   }
// }

// console.log(factorialRcursive(7));

// function ulang(isi){
//     if (isi === 2){
//         return 2;
//     } else if (isi === 4){
//         return isi + ulang(isi - 2);
//     } else {
//         return isi * ulang (isi - 4);
//     }
// }

// console.log(ulang(10));

// function* createNumbers(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const numbers = createNumbers();
// for (const number of numbers){
//     console.log(number);
// }

// function* genap(value){
//     for (let i = 2; i<= value; i++){
//         if (i % 4 === 4){
//             yield i;
//         }
//     }
// }

// const angkaGenap = genap(100);
// for(const angka of angkaGenap){
//     console.log(angka);
// }

// full arrow function

// const sayHello = (name) => {
//   const say = "hello" + name;
//   console.log(say);
// };

// sayHello("teguh");

// const number = (number) => {
//   for (let i = 0; i < number.lenght; i++) {
//     if (i === 3);
//     break;
//   }
//   return number;
// };

// console.log(number(20));

// const hello = (hello) => console.log(hello);

// hello("hello world");

// const sum = (first, second) => first + second;

// console.log(sum(30, 10));

// const nama = name => console.log(name);

// nama("teguh");

// function giveMeName (callback){
//     callback("teguh");
// }

// giveMeName((name) => console.log("hello " + name));

// closure

// function createAdder (value) {
//     const owner = "teguh";
//     function add (param) {
//         console.log(owner);

//         return value + owner;
//     }
//     return add;
// }

// const addTwo = createAdder(2);
// console.log(addTwo(3));
// console.log(addTwo(7));

// object method

// const person = {
//     name : "teguh",
//     sayHello: (name) => {
//         console.log(name);
//     }
// }

// person.sayHello("teguh");

// this

// const person = {
//     name: "teguh",
//     sayHello: (value) =>{
//         console.log("hello " + value + "my name is" + this.name);
//     }
// }

// person.sayHello("budi");

// arrow function di object

// const person = {
//     name : "teguh",
//     sayHello : (name) => {
//         console.log(this);
//         console.log(`hello ${name}, my name is ${this.name}`);
//     }
// }

// person.sayHello("budi");

// getter dan setter

// getter

// const person = {
//     firstName: "teguh ",
//     lastName: "santoso",
//     get fullName(){
//         return this.firstName + this.lastName;
//     },
//     set fullName(val){
//         const array = val.split(" ");
//         this.firstName = array[0];
//         this.lastName = array[1];
//     }
// }
// person.fullName = "teguh arief";
// console.log(person.firstName);
// console.log(person.lastName);

// destructuring

// const name = ["budi", "joko", "asep", "udin", "dobleh"];

// const [name1, name2, name3, ...others] = name;

// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(others);

// const person = {
//   firstName: "teguh",
//   middleName: "arief",
//   address: {
//     street: "jalan",
//     city: "jakarta",
//     country: "indonesia",
//   },
//   hobby: "maen",
// };

// const {firstName, middleName, address} = person;
// console.log(firstName);
// console.log(middleName);
// console.log(address);

// function displayPerson({ firstName, middleName, lastName }) {
//   console.log(firstName);
//   console.log(middleName);
//   console.log(lastName);
// }

// const person = {
//   firstName: "teguh",
//   middleName: "arief",
//   lastName: "santoso",
// };

// displayPerson(person);

// function sum ([first, second]){
//     return first + second;
// }

// console.log(sum([10, 10]));
// console.log(sum([20, 20]));

// const nama = ["agus", "sigit"];

// const [first, second, three = "asep"] = nama;
// console.log(nama);
// console.log(three);

// strict mode

// function useStrictMode() {
//     'use strict';
//     const person = {
//         firstName : "teguh"
//     }
//     with (person){
//         console.log(firstName);
//     }
// }

// useStrictMode();

// debugger

// function createFullName(firstName, middleName, lastName){
//     debugger;
//     const fullName = `${firstName} ${lastName} ${lastName}`;
//     return fullName;
// }

// const name = createFullName("teguh", "arief", "santoso");
// console.log(name);

// foreach map

// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// angka.forEach((e) => {
//   console.log(e);
// });

// sort

// let angka = [1, 2, 3, 40, 50, 6, 7, 8, 9];

// angka.sort((a, b) => {
//     return a - b;
// });
// console.log(angka.join(' - '));

// filter & find

// let angka = [1, 2, 3, 40, 50, 6, 7, 8, 9];

// let angka2 = angka.find((e) => {
//     return e > 5;
// })

// console.log(angka2);

// object

// let id ={
//     nama : "teguh",
//     kelas : "2"
// }

// console.log(id);

// function declaration

// function buatObject(nama, kelas){
//     let id = {};
//     id.nama = nama;
//     id.kelas = kelas;

//     return id;
// }

// let id2 = buatObject("teguh", "2");
// console.log(id2);

// cconstructor

// function Identitas(nama, kelas) {
//     this.nama = nama;
//     this.kelas = kelas;  
// }

// let id3 = new Identitas("teguh", "3");
// console.log(id3)


// let name = "Teguh";

// console.log(name);


// let arr = [0, 2 ,3 ,4, 5, 5, 5 ];
// let number = arr.find((e) => {
//     return e > 3;
// });
//  console.log(number);

// class name{
//     constructor(){
//         this.name = "teguh";
//         this.kelas = "2";
//     }
// }

// const id = new name();
// console.log(id);
