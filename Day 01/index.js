const fs = require("node:fs");

function readFileContent(filePath) {
    try {
        let data = fs.readFileSync(filePath, 'utf-8');
        console.log("File Content:");
        console.log(data);
    } catch(err) {
        console.log("Error reading file", err.message);
    }
    
}


// Test Cases
readFileContent('test-files/file1.txt');
readFileContent('test-files/empty-file.txt');
readFileContent('test-files/nonexistent-file.txt');