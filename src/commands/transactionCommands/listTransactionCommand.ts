import { program } from 'commander';
import { listTransaction } from '../../actions/actions';

const listTransactionCommands = async () => {
  program
    .command('list')
    .alias('l')
    .description('List all transactions')
    .action(() => listTransaction());
};

export { listTransactionCommands };
