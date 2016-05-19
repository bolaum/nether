const yargs = require('yargs');
const net = require('./network');
const node = require('./node');
const server = require('./server');

module.exports = function () {
  let help = false;
  yargs
    .usage('$0 [global options] command [command options] [arguments...]')
    .command(net)
    .command(node)
    .command(server)
    .help('help')
    .alias('h', 'help')
    .argv;
};
