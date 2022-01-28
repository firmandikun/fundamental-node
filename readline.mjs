import process from "process"
import readline from "readline"




const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


input.question("siapan nama anda ? : ", function (name) {
    console.log(`hello ${name}`);
    input.close();
})

// membaca input