import { yellow } from 'colors';
import * as yargs from 'yargs';
import { upgradeAvailable } from '../upgrade';

async function main() {
  const ya = yargs
    .option('check-upgrade', { type: 'boolean', desc: 'Check for cdk-ans-cli upgrade', default: true })
    .check(argv => {
      if (argv.checkUpgrade) {
        const versions = upgradeAvailable();
        if (versions) {
          console.error('------------------------------------------------------------------------------------------------');
          console.error(yellow(`A new version ${versions.latest} of cdk-ans-cli is available (current ${versions.current}).`));
          console.error(yellow('Run "npm install -g cdk-ans-cli" to install the latest version on your system.'));
          console.error('------------------------------------------------------------------------------------------------');
        }
      }

      return true;
    }, true)
    .commandDir('commands')
    .recommendCommands()
    .wrap(yargs.terminalWidth())
    .showHelpOnFail(false)
    .env('CDKANS')
    .epilogue('Options can be specified via environment variables with the "CDKANS_" prefix (e.g. "CDKANS_OUTPUT")')
    .help();

  const args = ya.argv;
  if (Object.keys(args).length === 0) {
    yargs.showHelp();
  }
}

main().catch(e => {
  console.error(e.stack);
  process.exit(1);
});