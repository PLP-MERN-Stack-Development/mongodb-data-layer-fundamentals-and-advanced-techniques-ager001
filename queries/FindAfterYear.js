const { connectDB, mongoose } = require('../connect');

async function findAfterYear() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const year = 2010;
  const result = await books.find({ published_year: { $gt: year } }).toArray();
  console.log(`Books published after ${year}:`, result);

  mongoose.connection.close();
}

findAfterYear();