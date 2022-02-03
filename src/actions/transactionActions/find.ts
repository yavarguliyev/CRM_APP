import Transaction from '../../models/transaction';

const findTransaction = (transactionId: string) => {
  const search = new RegExp(transactionId, 'i');
  Transaction.find({ $or: [{ transactionId: search }] })
    .then((transaction) => {
      console.info(transaction);
      console.info(`${transaction.length} matches`);
    })
    .catch((error) => console.info(error.message));
};

export { findTransaction };
