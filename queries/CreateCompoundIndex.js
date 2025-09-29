const { connectDB, mongoose } = require('../connect');

async function createCompoundIndex() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const result = await books.createIndex({ author: 1, published_year: 1 });
  console.log('Compound index created on author and published_year:', result);

  mongoose.connection.close();
}

createCompoundIndex();