import net from "net"


const server = net.createServer(function (client) {
    console.log("Client data conected");

    client.on("data", function (data) {
        console.log("Receive data from client :", data.toString());
        client.write("Hello :", data.toString())
    })
})


server.listen(3000, "localhost")