import { EventEmitter } from "events"

const emmiter = new EventEmitter()


emmiter.addListener('hello', (name) => {
    console.log(`info ${name}`);
})
emmiter.addListener('hello', (name) => {
    console.log(`hallo ${name}`);
})

emmiter.emit("hello","Firman");


