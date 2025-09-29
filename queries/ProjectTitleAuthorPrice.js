const { connectDB, mongoose } = require('../connect');

async function projectFields() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const result = await books.find(
    {},
    { projection: { title: 1, author: 1, price: 1, _id: 0 } }
  ).toArray();

  console.log('Projected fields (title, author, price):', result);
  mongoose.connection.close();
}

projectFields();