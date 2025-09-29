const { connectDB, mongoose } = require('../connect');

async function findByAuthor() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const author = 'George Orwell';
  const result = await books.find({ author }).toArray();
  console.log(`Books by ${author}:`, result);

  mongoose.connection.close();
}

findByAuthor();