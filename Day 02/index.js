const fs = require("node:fs");

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if(err) {
            console.log("Error writing to file:", err.message);
        } else {
            console.log("Data written to file: ", filePath)
        }
    })
}


writeToFile('test-files/output1.txt', 'Sample content.');
writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');