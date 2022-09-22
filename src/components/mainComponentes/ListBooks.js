/* eslint-disable react/jsx-pascal-case */
import { Link } from "react-router-dom";
import * as BooksAPI from '../../BooksAPI'
import { useState, useEffect } from "react";
import Shelf from "../smallCompon2ntes/Shelf"

const ListBooks = () => {



  const shelfsValues = {
    "Currently Reading": "currentlyReading", "Want to Read": "wantToRead", "Read": "read"
  };
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);

    }
    getBooks()
  }, [])
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Object.keys(shelfsValues).map((ele, index) => (
            < Shelf books={books} setBooks={setBooks} title={ele} value={Object.values(shelfsValues)[index]} key={index} />
          ))}

        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks