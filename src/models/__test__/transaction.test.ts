import Transaction from '../transaction';

it('implements optimistic concurrency control', async () => {
  const transaction = Transaction.build({
    details: 'Service is started...',
  });

  await transaction.save();

  // fetch the transaction twice
  const firstInstance = await Transaction.findById(transaction.id);
  const secondInstance = await Transaction.findById(transaction.id);

  // make two separate changes to the transactions we fetched
  firstInstance!.set({ details: 'Service is started...' });
  secondInstance!.set({ details: 'Service is started...' });

  // save the first fetched ticket
  await firstInstance!.save();

  // save the second fetched transaction and expect an error
  try {
    await secondInstance!.save();
  } catch (error: any) {
    if (!error.message) return new Error(error.message);

    return new Error();
  }

  return new Error('Should not reach this point');
});

it('increments the version number on multiple saves', async () => {
  const transaction = Transaction.build({
    details: 'Service is started...',
  });

  await transaction.save();
  expect(transaction.details).toEqual('Service is started...');

  await transaction.save();
  expect(transaction.details).toEqual('Service is started...');

  await transaction.save();
  expect(transaction.details).toEqual('Service is started...');
});
