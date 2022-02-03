import Transaction from '../../models/transaction';

const listTransaction = () => {
  Transaction.find().then((transactions) => {
    console.info(transactions);
    console.info(`${transactions.length} transactions`);
  });
};

export { listTransaction };
