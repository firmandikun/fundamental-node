import os from "os"

console.table(os.cpus());
console.log(os.arch());
console.log(os.uptime());
console.log(os.totalmem());
console.log(os.freemem());
console.table(os.networkInterfaces());



// standar library os itu digunakan untuk mendapatkan 
// informasi mengenai sistem informasi yang dignakan

// https://nodejs.org/dist/latest-v16.x/docs/api/os.html 