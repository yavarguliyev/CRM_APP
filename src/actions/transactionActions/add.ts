import Transaction from '../../models/transaction';
import { v4 as uuid } from 'uuid';
import ITransaction from '../../interfaces/transaction';

const addTransaction = async (transaction: ITransaction) => {
  transaction.transactionId = uuid();
  transaction.userId = uuid();

  Transaction.create(transaction)
    .then(() => console.info('New transaction added...'))
    .catch((error) => console.error(error.message));
};

export { addTransaction };
