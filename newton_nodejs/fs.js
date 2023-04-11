const file = require('fs/promises');

let fileName = "newton.txt";

let content = "welcome to MERN stack";

// Create a new file
const writeFileDetails = async (fileName, content) => {
    await file.writeFile(fileName, content);
}

writeFileDetails(fileName, content);

// Giving the current path
console.log(__dirname);


// Read a file
// files - binary - buffer-- > utf - 8 -- > toString()

const readFileDetails = async (fileName) => {
    let result = await file.readFile(fileName);
    //binary format - buffer - unicode encoded string
    // console.log(result);
    return result.toString();

}

readFileDetails(fileName).then((result) => {
    console.log(result);
})

// buffer data
// buffer-- > toString()

// Appending the data
const appendFileDetails = async (fileName) => {
    await file.appendFile(fileName, " And my name is akash");
}
appendFileDetails(fileName);