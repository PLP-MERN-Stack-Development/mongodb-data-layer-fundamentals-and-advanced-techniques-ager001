const { connectDB, mongoose } = require('../connect');

async function sortDesc() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const result = await books.find(
    {},
    { projection: { title: 1, author: 1, price: 1, _id: 0 } }
  ).sort({ price: -1 }).toArray();

  console.log('Books sorted by price (descending):', result);
  mongoose.connection.close();
}

sortDesc();