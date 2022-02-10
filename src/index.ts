#!/usr/bin/env node
import mongoConnection from './database/mongo-connection';
import app from './app';

const start = async () => {
  await mongoConnection();
  await app();
};

start();
