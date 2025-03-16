const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt", 'utf-8');

// readStream.on("data", (chunk) => {
//     console.log("Recieved chunk:", chunk.length)
// })

// readStream.on("end", () => {
//     console.log('Finished reading file');
// })

// readStream.on("error", (err) => {
//     console.log("Error reading file:", err)
// })

// const writeStream = fs.createWriteStream("streamOutput.txt");

// writeStream.write("Hello, this is written using a steam!\n");
// writeStream.write("\nMore content can be added...\n");

// writeStream.end(() => {
//     console.log('Finished writing to file');
// })

// const writeStream = fs.createWriteStream("copiedFile.txt");


// Piping
// readStream.pipe(writeStream)

// writeStream.on("finish", () => {
//     console.log("File copied successfully!")
// })

const buffer = Buffer.from("Hello World!");
console.log(buffer);
console.log(buffer.toString())
console.log(buffer.toJSON())