import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI';



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
          {search.map((book) => (
            <li key={book.id}>
              <div className="book" >
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage:
                        `url("${book.imageLinks.smallThumbnail}")`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select onChange={(e) => {
                      const getBooksSelect = async () => {
                        const res = await BooksAPI.get(book.id);
                        await BooksAPI.update(res, `${e.target.value}`);
                        setBooks(await BooksAPI.getAll());

                      }
                      getBooksSelect()
                    }}>
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors !== undefined && book.authors.map((author) => (
                  <div className="book-authors">{author}</div>
                ))}


              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Search