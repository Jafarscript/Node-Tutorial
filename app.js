const fs = require("fs");

fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err){
        console.log("Error reading file:", err);
        return;
    }
    console.log("File content:", data)
})

// Creating a file

// fs.writeFile("output.txt", "Node.js is awesome!", (err) => {
//     if (err){
//         console.log("Error writing file", err)
//         return;
//     }
//     console.log("File written successfully")
// })


// Update the content of a file

// fs.appendFile("output.txt", "\nLet's master Node.js", (err) => {
//     if (err){
//         console.log("Error appendding file", err)
//         return;
//     }
//     console.log("Content appended successfully")
// })

// Removing/Deleting a file

fs.unlink("output.txt", (err) => {
    if (err){
        console.log("Error deleting file:", err)
        return;
    }
    console.log("File deleted successfully!")
})
