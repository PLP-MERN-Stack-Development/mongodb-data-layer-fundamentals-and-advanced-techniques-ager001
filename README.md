# 📚 MongoDB Data Layer Fundamentals and Advanced Techniques

This project demonstrates how to interact with a MongoDB database using Node.js and Mongoose. It covers CRUD operations, advanced queries, aggregation pipelines, and indexing—all organized into modular scripts for clarity and reuse.

---

## 🛠️ Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install mongoose 
   npm install dotenv

   📦 Task 1:
    Basic Queries- findByGenre.js – Find all books in a specific genre
- findAfterYear.js – Find books published after a certain year
- findByAuthor.js – Find books by a specific author
- updatePrice.js – Update the price of a specific book
- deleteByTitle.js – Delete a book by its title
🔍 Task 2: 
Advanced Queries- findInStockAfter2010.js – Find books in stock and published after 2010
- projectTitleAuthorPrice.js – Return only title, author, and price fields
- sortByPriceAsc.js – Sort books by price (ascending)
- sortByPriceDesc.js – Sort books by price (descending)
- paginateBooksPage1.js – Paginate books (page 1, 5 per page)
- paginateBooksPage2.js – Paginate books (page 2, 5 per page)
📊 Task 3:
 Aggregation Pipelines- avgPriceByGenre.js – Calculate average price of books by genre
- mostBooksByAuthor.js – Find the author with the most books
- groupByDecade.js – Group books by publication decade and count them
⚡ Task 4:
 Indexing- createTitleIndex.js – Create an index on the title field
- createCompoundIndex.js – Create a compound index on author and published_year
- explainTitleQuery.js – Use explain() to analyze query performance
🚀 Running 
ScriptsUse the terminal in VS Code to run any script:node filename.js
Example:node findByGenre.js
🧠 Notes- 
All scripts use the same connect.js for database connection.
- Results are printed to the console.
- You can extend this project by adding models, validation, or exporting results to files.
📄 License
This project is for educational purposes and open for extension or reuse.
---

