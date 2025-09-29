const { connectDB, mongoose } = require('../connect');

async function findByGenre() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const genre = 'Fantasy'; // Change as needed
  const result = await books.find({ genre }).toArray();
  console.log(`Books in genre "${genre}":`, result);

  mongoose.connection.close();
}

findByGenre();