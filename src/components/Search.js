import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI';
import Book from "./Book"


const Search = ({ setBooks }) => {

  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);


  const updateQuery = (query) => {
    setQuery(query.trim());
    const searchBooks = async () => {
      const res = await BooksAPI.search(query.trim())
      const booksInShelf = await BooksAPI.getAll()

      for (let i = 0; i < booksInShelf.length; i++) {
        for (let j = 0; j < res.length; j++) {
          if (booksInShelf[i].id === res[j].id) {
            res[j] = booksInShelf[i];
          }
        }
      }
      setSearch(res && res.items === undefined ? res : [])

    }
    searchBooks();
  };

  return (

    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => {
              updateQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {search.map((book) => (
            <Book book={book} setBooks={setBooks} key={book.id} />
          ))}

        </ol>
      </div>
    </div>
  )
}

export default Search