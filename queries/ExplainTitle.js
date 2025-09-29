const { connectDB, mongoose } = require('../connect');

async function explainQuery() {
  await connectDB();
  const books = mongoose.connection.collection('books');

  const explanation = await books.find({ title: '1984' }).explain('executionStats');
  console.log('Query performance explanation:', explanation);

  mongoose.connection.close();
}

explainQuery();