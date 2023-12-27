function cetak (nama){
    return `hello ${nama}`;
}

class Coba {
    constructor(){
        this.name = "saya coba";
        this.age = 40;

    }
    full (){
        return `${this.name} ${this.age}`;
    }
}
const pi = 3.14;

export default cetak;
export { Coba, pi };
