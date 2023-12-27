import fs from "fs";

// try {
//     fs.writeFileSync("data/test.txt", "hello world");

// } catch (error) {
//     console.log(error);
// }

// fs.writeFile('test.txt', "hello dunia", (err) => {
//     if (err){
//         console.error(err);
//     }
// })

// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

import ReadLine from "readline";

const read = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,

})

read.question("siapa2 nama anda :", (nama) => {
    read.question("berapa umur mu :", (umur) => {
        const data = {
            nama: nama,
            umur: umur
        }

        const file = fs.readFileSync("identitas.json", "utf-8");
        const identitas = JSON.parse(file);

        identitas.push(data);

        fs.writeFileSync("identitas.json", JSON.stringify(identitas))

        console.log(`terima kasih ${nama}`);
        read.close();
    })
})