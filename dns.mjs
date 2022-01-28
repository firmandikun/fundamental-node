import dns from "dns/promises"


const address = await dns.lookup("www.instagram.com")

console.log(address);
// console.log(address.family);



// DNS merupakan standard library yang bisa digunakan untuk bekerja dengan DNS (domain name server)
// https://nodejs.org/dist/latest-v16.x/docs/api/dns.html 
