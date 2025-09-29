const { connectDB, mongoose } = require('../connect');

async function createTitleIndex() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const result = await books.createIndex({ title: 1 });
  console.log('Index created on title:', result);

  mongoose.connection.close();
}

createTitleIndex();