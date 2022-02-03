import Transaction from '../../models/transaction';
import ITransaction from '../../interfaces/transaction';

const updateTransaction = async (
  transactionId: string,
  transaction: ITransaction
) => {
  Transaction.updateOne({ transactionId }, transaction)
    .then(() => {
      console.info('Transaction updated...');
    })
    .catch((error) => console.info(error.message));
};

export { updateTransaction };
