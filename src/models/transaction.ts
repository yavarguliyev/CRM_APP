import mongoose from 'mongoose';
import renameEntitiesIDs from '../utils/renameEntitiesIDs';

interface TransactionAttributes {
  transactionId?: string;
  details: string;
  userId?: string;
}

interface TransactionModel extends mongoose.Model<TransactionDoc> {
  build(attrs: TransactionAttributes): TransactionDoc;
}

interface TransactionDoc extends mongoose.Document {
  transactionId: string;
  details: string;
  userId: string;
}

const transactinSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
    },
    details: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
    },
  },
  {
    toJSON: {
      transform: renameEntitiesIDs,
    },
  }
);

transactinSchema.statics.build = (attrs: TransactionAttributes) => {
  return new Transaction(attrs);
};

const Transaction = mongoose.model<TransactionDoc, TransactionModel>(
  'Transaction',
  transactinSchema
);

export default Transaction;
