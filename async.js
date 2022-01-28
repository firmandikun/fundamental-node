function samplePromise() {
    return Promise.resolve("firman");
}

let latihan = async () => {
    const cek = await samplePromise()
    console.log(cek);
}
latihan()


// error karena asyns await  itu  harus digunakan didalam function 
// atau engga dibuat filenya jadi mjs

// const nama = await samplePromise()
// console.log(nama);

