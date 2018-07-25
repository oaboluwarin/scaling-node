const { spawn } = require('child_process');
// const os = require('os');

// A process that can execute the pwd command
// const child = spawn('pwd');
const child = spawn('find', ['.', '-type', 'f']);
// const child = spawn('find', ['furthermaths', '-type', 'f']);

child.stdout.on('data', (data) => {
  console.log(`child stdout: \n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr: \n${data}`);
});

child.on('exit', (code, signal) => {
  console.log(`child process exited with code ${code}, signal ${signal}`);
});


