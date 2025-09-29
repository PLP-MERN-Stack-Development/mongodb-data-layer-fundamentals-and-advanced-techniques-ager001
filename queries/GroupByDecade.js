const { connectDB, mongoose } = require('../connect');

async function groupByDecade() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const result = await books.aggregate([
    {
      $group: {
        _id: {
          $floor: { $divide: ["$published_year", 10] }
        },
        count: { $sum: 1 }
      }
    },
    {
      $project: {
        decade: {
          $concat: [
            { $toString: { $multiply: ["$_id", 10] } },
            "s"
          ]
        },
        count: 1,
        _id: 0
      }
    }
  ]).toArray();

  console.log("Books grouped by decade:", result);
  mongoose.connection.close();
}

groupByDecade();