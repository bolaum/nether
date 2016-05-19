exports.command = 'network';
exports.describe = 'manage networks';
exports.builder = (yargs) =>
  yargs
    .usage('$0 [global options] network <command> [arguments...]')
    .command('list', 'print existing networks info')
    .command('new', 'create a new network', {
      id: {
        desc: 'network id number',
        type: 'number',
      },
      blocktime: {
        desc: 'block time in seconds',
        type: 'number',
      },
    })
    .command('rm', 'remove a network (ALL NETWORK DATA WILL BE LOST!)')
    .command('select', 'select a network to be used')
    .command('start', 'start a network')
    .command('stop', 'stop a network');

exports.handler = function (argv) {
  console.log(argv);
};
