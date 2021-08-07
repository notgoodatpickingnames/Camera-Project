import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const client = await MongoClient.connect('localhost:27017');

export class DbClient {
    client.
}