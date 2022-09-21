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
          {console.log(search)}
          {search.map((book) => (
            <Book book={book} setBooks={setBooks} key={book.id} />
          ))}

        </ol>
      </div>
    </div>
  )
}

export default Search