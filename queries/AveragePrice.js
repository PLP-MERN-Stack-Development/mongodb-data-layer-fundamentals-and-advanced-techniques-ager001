const { connectDB, mongoose } = require('../connect');

async function avgPriceByGenre() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const result = await books.aggregate([
    {
      $group: {
        _id: "$genre",
        averagePrice: { $avg: "$price" }
      }
    }
  ]).toArray();

  console.log("Average price by genre:", result);
  mongoose.connection.close();
}

avgPriceByGenre();