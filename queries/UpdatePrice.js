const { connectDB, mongoose } = require('../connect');

async function updatePrice() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const title = 'Brave New World';
  const newPrice = 30;

  const result = await books.updateOne(
    { title },
    { $set: { price: newPrice } }
  );

  console.log(` Updated price for "${title}":`, result.modifiedCount);

  mongoose.connection.close();
}

updatePrice();