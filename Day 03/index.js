const {exec} = require("child_process")

function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if(error) {
            console.error("Error executing command: ", error.message);
            return;
        } else if (stdout) {
            console.log(`stdout: ${stdout}`);
        } else {
            console.error(`stderr: ${stderr}`);
        }
    });
}



executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');