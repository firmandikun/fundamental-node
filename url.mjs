import {URL} from "url"

const cek = new URL("https://www.youtube.com/watch?v=b39Xqf5iyjo&t=8844s")


// console.log(cek.pathname);
// console.log(cek.protocol);
// console.log(cek.host);
console.log(cek.searchParams);
console.log(cek.toString);