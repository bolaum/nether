exports.command = 'server';
exports.describe = 'manage nether server';
exports.builder = (yargs) =>
  yargs
    .usage('$0 [global options] server <command>')
    .command('start', 'start nether server')
    .command('stop', 'stop nether server');

exports.handler = function (argv) {
  console.log(argv);
};
