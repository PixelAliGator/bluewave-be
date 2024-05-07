import mongoose, { ConnectOptions } from 'mongoose'
import { dbURI } from '../config/enviorment'


//! Connecting to the database
export default function connectToDb() {

    mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
  return;
}