class murid{
    constructor(nama, umur, kelas, absen, nilai){
        // public method
        this.nama = nama;
        this.umur = umur;
        this.kelas = kelas;

        // private method
        var absen = absen;
        var nilai =nilai;

        // public method
        this.detail = () => {
            return `${this.nama} ${this.umur} ${this.kelas}`; 
        }

        // private method
        function show(){
            return `absen ${absen} nilai ${nilai}`;
        }
    }
}

const murid1 = new murid ("teguh", "17", "11", "4");

console.log(murid1.nama);


// pilar encapsulation
class barang{
    constructor(jumlah){
        let pajak = 500;
        let biaya = () => jumlah * 1000;
        this.totalBiaya = () => biaya() + pajak;
    }
}

const laptop = new barang (5);

console.log(laptop.totalBiaya());


// inheritence
class orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
}

class person extends orang{
    constructor(nama, umur, pekerjaan){
        super(nama, umur);
        this.pekerjaan = pekerjaan;
    }
}

const person1 = new person("teguh", "17", "mahasiswa");

console.log(person1.nama);
console.log(person1.pekerjaan);


// polymorphism
class people{
    constructor(name){
        this.name = name;
    }

    greet(){
        return `hello my name is ${this.name}`;
    }
}

class salam extends people{
    constructor(name){
        super(name)
    }

    // greet(){
    //     return `halo selamat pagi nama saya adalah ${this.name}`;
    // }
}

const saya = new salam("teguh");
console.log(saya.greet());


// abstraction
class pesan{
    constructor(namaBarang){
        var namaBarang = namaBarang;
        var totalSemua = () => namaBarang * 1000;

        this.tampilBiaya = () => totalSemua();
    }
}

const monitor = new pesan(5);
console.log(monitor.tampilBiaya());


// setter getter
class produk{
    constructor(){
        this.name = null;
    }
    set setName(value){
        if(typeof(value) === "string"){
            this.name = value;
        } else {
            this.name = null;
        }
    }

    get getName(){
        if (this.name === null){
            return `value belum di reset`;
        }
        return this.name;
    }
}

const produk1 = new produk();
produk1.setName = "lenovo";
console.log(produk1.name);

const produk2 = new produk();
console.log(produk1.getName);

// override
class product{
    constructor(name){
        this.name = name;
    }
    getDetail(){
        return `product name is ${this.name}`;
    }
}

class phone extends product{
    constructor(name, brand){
        super(name);
        this.brand = brand;
    }
    getDetail(){
        return `phone name is ${this.name} with brand ${this.brand}`;
    }
}

const phone1 = new phone ("y20", "vivo");
console.log(phone1.getDetail());