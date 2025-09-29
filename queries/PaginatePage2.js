const { connectDB, mongoose } = require('../connect');

async function paginatePage2() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const result = await books.find(
    {},
    { projection: { title: 1, author: 1, price: 1, _id: 0 } }
  ).sort({ price: 1 }).skip(5).limit(5).toArray();

  console.log('Page 2 (next 5 books):', result);
  mongoose.connection.close();
}

paginatePage2();