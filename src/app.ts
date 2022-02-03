import { program } from 'commander';
import {
  versionCommands,
  listTransactionCommands,
  findTransactionCommands,
  addTransactionCommands,
  updateTransactionCommands,
  removeTransactionCommands,
} from './commands/commands';

const app = async () => {
  await versionCommands();

  await listTransactionCommands();
  await findTransactionCommands();
  await addTransactionCommands();
  await updateTransactionCommands();
  await removeTransactionCommands();

  program.parse(process.argv);
};

export default app;
