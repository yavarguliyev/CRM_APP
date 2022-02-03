import { program } from 'commander';
import { prompt } from 'inquirer';
import { updateTransaction } from '../../actions/actions';
import questions from '../../utils/questions';

const updateTransactionCommands = async () => {
  program
    .command('update <transactionId>')
    .alias('u')
    .description('Update a transaction')
    .action((transactionId) => {
      prompt(questions('Transaction')).then((answers) =>
        updateTransaction(transactionId, answers)
      );
    });
};

export { updateTransactionCommands };
