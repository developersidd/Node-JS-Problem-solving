import net from "net";
const client = net.connect({port: 5000}, () => {
    console.log("Connected to server");
})

// listen data from the server
client.on('data', (data) => {
    // log the received data from the server
    console.log(data.toString());
    // end data listener
    client.end();
});

// listen disconnection from the server
client.on("end", () => {
    console.log("Disconnected from the server")
})