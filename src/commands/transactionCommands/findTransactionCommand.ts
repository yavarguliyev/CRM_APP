import { program } from 'commander';
import { findTransaction } from '../../actions/actions';

const findTransactionCommands = async () => {
  program
    .command('find <transactionId>')
    .alias('f')
    .description('Find a transaction')
    .action((transactionId) => findTransaction(transactionId));
};

export { findTransactionCommands };
