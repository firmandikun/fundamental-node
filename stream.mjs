import fs from "fs"


const writer = fs.createWriteStream("target.log");


writer.write("M\n")
writer.write("firman\n")
writer.write("setiawan\n")
writer.end();


const reader = fs.createReadStream("target.log");

reader.addListener('data',  function (data) {
    console.log(data.toString());
    // reader.close()
})