import mongoose from 'mongoose'
import env from 'env'

export const connect = () => {
  mongoose.set('useCreateIndex', true)
  mongoose.set('useUnifiedTopology', true)
  const db = mongoose.connection;
  db.on("error", () => console.error.bind(console, "connection error:"));
  db.once("open", () => {
    mongoose.set("debug", (collectionName, method, query, doc) => {
      console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
    });
    console.log("Connection to the database established")
  });
  return mongoose.connect(env.databaseUrl, {  useUnifiedTopology: true, useNewUrlParser: true })
}
