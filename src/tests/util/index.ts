import mongoose from 'mongoose';

export const closeConnections = async () => await mongoose.connection.close();

export const dropCollections = async () => {
  const collections = await mongoose.connection.db.collections();

  for (const collection of collections) {
    await collection.drop();
  }
};
