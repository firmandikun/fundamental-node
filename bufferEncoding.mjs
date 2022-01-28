const buffer = Buffer.from("M firman setiawan", "utf8");

console.log(buffer.toString());
console.log(buffer.toString("hex"));
console.log(buffer.toString("base64"));


const buffer2 = Buffer.from("TSBmaXJtYW4gc2V0aWF3YW4=", "base64");

console.log(buffer2.toString(), "utf8");