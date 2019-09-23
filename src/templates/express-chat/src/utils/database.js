import mongoose from 'mongoose'

const connectDb = () => {
  mongoose.set('useCreateIndex', true)
  const db = mongoose.connection;
  db.on("error", () => console.error.bind(console, "connection error:"));
  db.once("open", () => {
    mongoose.set("debug", (collectionName, method, query, doc) => {
      console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
    });
    console.log("Connection to the database established")
  });
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
}

export { connectDb }
