import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI';
import Book from "./Book"


const Search = ({ setBooks }) => {

  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);


  const updateQuery = (query) => {
    setQuery(query.trim());
    if (query !== '' && isNaN(parseInt(query))) {
      const searchBooks = async () => {
        let res = await BooksAPI.search(query)
        const booksInShelf = await BooksAPI.getAll()
        try {
          res = res.map((ele) => {
            const shelfs_id = booksInShelf.map(function (e) { return e.id; });
            return shelfs_id.indexOf(ele.id) >= 0 ? booksInShelf[shelfs_id.indexOf(ele.id)] : ele
          })
        } catch (e) {
          console.log("Not Found")
        }

        setSearch(res && res.items === undefined ? res : [])

      }
      searchBooks();
    } else {
      setSearch([])
    }
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