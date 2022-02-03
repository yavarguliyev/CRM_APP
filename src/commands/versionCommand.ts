import { program } from 'commander';

const versionCommands = async () => {
  program.version('1.0.0').description('Client Management System');
};

export { versionCommands };
