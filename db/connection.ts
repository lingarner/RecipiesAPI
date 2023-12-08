// ../db/connection.ts

import dotenv from 'dotenv';
import { MongoClient, Db } from 'mongodb';

dotenv.config();

let _db: Db | null;

const initDb = (callback: (error: Error | null, db?: Db) => void): void => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI as string)
    .then((client) => {
      _db = client.db(); // Access the "db" property to get the database
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = (): Db => {
  if (!_db) {
    throw new Error('Db not initialized');
  }
  return _db;  // Return the Db instance directly
};

export { initDb, getDb };
