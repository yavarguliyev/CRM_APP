import { program } from 'commander';
import { prompt } from 'inquirer';
import { addTransaction } from '../../actions/actions';
import questions from '../../utils/questions';

const addTransactionCommands = async () => {
  program
    .command('add')
    .alias('a')
    .description('Add a transaction')
    .action(() => {
      prompt(questions('Transaction')).then((answers) =>
        addTransaction(answers)
      );
    });
};

export { addTransactionCommands };
