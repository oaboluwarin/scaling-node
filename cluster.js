const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);

  for (let i = 0; i < cpus; i++) {
    cluster.fork(); // Under the hood, using the child process' fork api
  }

  Object.values(cluster.workers).forEach(worker => {
    worker.send(`Hi there, worker ${worker.id}`)
  });

} else {
  require('./server');
}

// running this module ensures that the node app distributes the incoming requests among all processes handled by the available cpus.
