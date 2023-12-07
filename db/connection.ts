import dotenv from 'dotenv';
import { MongoClient, Db } from 'mongodb';

dotenv.config();

let _db: Db;

const initDb = (callback: (error: Error | null, db?: Db) => void): void => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }

  MongoClient.connect(process.env.MONGODB_URI as string)
    .then((client) => {
      _db = client.db();
      callback(null, _db);
    })
    .catch((err: any) => {
      callback(err);
    });
};

const getDb = (): Db => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

export { initDb, getDb };
