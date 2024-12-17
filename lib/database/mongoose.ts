import mongoose , {Mongoose } from 'mongoose';

const   MONGODB_URL = process.env.MONGO_DB_URL;

interface MongooseConnection {
    conn : Mongoose | null;
    promise : Promise<Mongoose> | null
}

let cached : MongooseConnection = (global as any ).mongoose

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
  }

export async function connectToDatabase() {
if (cached.conn) {
    console.log("connected to database");
    
    return cached.conn;
}

if (!MONGODB_URL) throw  new Error("missing MongoDB url")

cached.promise = cached.promise || mongoose.connect
( MONGODB_URL , { dbName :"imginify " , bufferCommands: false})

cached.conn = await cached.promise;
console.log("connected to database");

return cached.conn;
}