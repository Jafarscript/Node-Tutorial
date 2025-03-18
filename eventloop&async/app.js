// const fs = require('fs')
const fs = require('fs').promises

// fs.readFile("../message.txt", 'utf-8', (err, data) => {
//     if (err){
//         console.log("Error reading the file", err)
//         return;
//     }

//     console.log("File content:", data)
// })

// console.log("Reading File")
 
// or promises (Modern Way)

console.log("Start reading...");

fs.readFile("../message.txt", 'utf8')
    .then((data) => console.log("File content:", data))
    .catch((err) => console.error("Error reading the file:", err));


console.log("Reading in progress...")

// or Async/await

async function readFileAsync() {
    try {
        console.log("Start reading...");
        const data = await fs.readFile("../message.txt", 'utf8')
        console.log("File content:", data)
    } catch (error) {
        console.error("Error reading the file:", error)
    }
    
}

readFileAsync()
console.log("Reading in progress...")