const fs = require("node:fs");

function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) {
            console.log("Error reading file: ", err.message);
        } else {
            console.log("File Content:");
            console.log(data);
        }
    });
}


// Test Cases
readFileContent('test-files/file1.txt');
readFileContent('test-files/empty-file.txt');
readFileContent('test-files/nonexistent-file.txt');