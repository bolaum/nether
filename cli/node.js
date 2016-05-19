exports.command = 'node';
exports.describe = 'manage selected network nodes';
exports.builder = (yargs) =>
  yargs
    .usage('$0 [global options] node <command> [arguments...]')
    .command('list', 'print existing nodes info')
    .command('mine', 'manage mining operation for node')
    .command('monitor', 'monitor node status')
    .command('new', 'create new node')
    .command('rm', 'remove node (ALL NODE DATA WILL BE LOST!)')
    .command('start', 'connect node to network')
    .command('stop', 'close node connection to network');

exports.handler = function (argv) {
  console.log(argv);
};
