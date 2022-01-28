function samplePromise() {
    return Promise.resolve("firman");
}

const cek = await samplePromise()
console.log(cek);

//  tapi kalau kita lakukan ini dengan menggunkan mjs function secara default itu async jadi tidak error 

