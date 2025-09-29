const { connectDB, mongoose } = require('../connect');

async function findBooks() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const result = await books.find({
    in_stock: true,
    published_year: { $gt: 2010 }
  }).toArray();

  console.log('In-stock books published after 2010:', result);
  mongoose.connection.close();
}

findBooks();