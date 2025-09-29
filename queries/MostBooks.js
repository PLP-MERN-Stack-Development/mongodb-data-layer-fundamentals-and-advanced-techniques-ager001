const { connectDB, mongoose } = require('../connect');

async function mostBooksByAuthor() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const result = await books.aggregate([
    {
      $group: {
        _id: "$author",
        count: { $sum: 1 }
      }
    },
    { $sort: { count: -1 } },
    { $limit: 1 }
  ]).toArray();

  console.log("Author with most books:", result);
  mongoose.connection.close();
}

mostBooksByAuthor();