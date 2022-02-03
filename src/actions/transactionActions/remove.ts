import Transaction from '../../models/transaction';

const removeTransaction = async (transactionId: string) => {
  Transaction.deleteOne({ transactionId })
    .then(() => console.log('Transaction removed...'))
    .catch((error) => console.info(error.message));
};

export { removeTransaction };
