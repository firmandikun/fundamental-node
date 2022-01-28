import process from "process";

process.addListener('exit', (exitcode) => {
    console.log(`node js exit with code ${exitcode}`);
} )

console.log(process.version);
console.table(process.argv);
// console.log(process.report);
// console.log(process.env);


process.exit(1)


console.log("info");