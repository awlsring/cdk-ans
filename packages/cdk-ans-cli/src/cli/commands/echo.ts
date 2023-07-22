import * as yargs from 'yargs';
import { readConfigSync } from '../../config';

const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = 'hi';
  public readonly describe = 'Echos a string from the config or passed in.';
  public readonly aliases = ['hi'];

  public readonly builder = (args: yargs.Argv) => args
    .option('echo', { default: config.echo, required: true, desc: 'What to echo', alias: 'e' });

  public async handler(argv: any) {
    const echo = argv.echo;
    console.log(echo);
  }
}

module.exports = new Command();