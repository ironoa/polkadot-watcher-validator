import process from 'process';
import program from 'commander';
import { startAction } from './actions/start';
import '@polkadot/api-augment'; //https://github.com/polkadot-js/api/issues/4450

// backstop for any async path not routed through _guarded/try-catch: log clearly
// and exit non-zero so the orchestrator restarts us (default Node behavior crashes
// with a bare stack trace)
process.on('unhandledRejection', (reason) => {
  console.error(`unhandled rejection, exiting: ${reason}`);
  process.exit(1);
});


program
  .command('start')
  .description('Starts the watcher.')
  .option('-c, --config [path]', 'Path to config file.', './config/main.yaml')
  .action(startAction);

program.allowUnknownOption(false);

program.parse(process.argv);
