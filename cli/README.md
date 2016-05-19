## Files

```
~/.nether/client
~/.nether/client/state.json
	stores client state
		- selected network
		- selected node

~/.nether/server
~/.nether/server/config.json
	server's config data
		- default block time

~/.nether/server/<networkname>/
~/.nether/server/<networkname>/network.json
	stores network config
~/.nether/server/<networkname>/nodes.json
	stores node information for quick access

~/.nether/server/<networkname>/<nodename>_datadir
	datadirs for nodes
```

## Commands

### nether

```
$ nether help
nether [global options] command [command options] [arguments...]

COMMANDS:
	network     manage networks
	node        manage selected network nodes
	server      manage nether server
```

### nether network

```
$ nether network help
nether [global options] network [command options] [arguments...]

COMMANDS:
	list        print existing networks info
	new         create a new network
	rm          remove a network (ALL NETWORK DATA WILL BE LOST!)
	select      select a network to be used
	start       start a network
	stop        stop a network

$ nether network help new
nether network new --id <number> --blocktime <timeinseconds> <networkname>

$ nether network help rm
nether network rm <networkname>

$ nether network help select
nether network select <networkname>

$ nether network help start
nether network start <networkname>
```

### nether node

```
$ nether node help
nether [global options] node [command options] [arguments...]

COMMANDS:
	list        print existing nodes info
	mine        manage mining operation for node
	monitor     monitor node status
	new         create new node
	rm          remove node (ALL NODE DATA WILL BE LOST!)
	start       connect node to network
	stop        close node connection to network

$ nether node help mine
nether node mine action <nodename>

ACTIONS:
	start
	stop
	one
```

### nether server

```
$ nether server help
nether [global options] server [command options] [arguments...]

COMMANDS:
	start       start nether server
	stop        stop nether server
```
