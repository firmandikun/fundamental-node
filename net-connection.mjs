import net from "net"


const connection = net.createConnection({port : 3000, host: "localhost"});

connection.addListener("data", function (data) {
    console.log("Recieve data form server " , data.toString());
    
})


setInterval(() => {
    connection.write("Firman\r\n")
}, 2000);