import { program } from 'commander';
import { removeTransaction } from '../../actions/actions';

const removeTransactionCommands = async () => {
  program
    .command('remove <transactionId>')
    .alias('r')
    .description('Remove a transaction')
    .action((transactionId) => removeTransaction(transactionId));
};

export { removeTransactionCommands };
