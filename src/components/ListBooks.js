/* eslint-disable react/jsx-pascal-case */
import Currently_Reading from './Currently_Reading'
import Want_To_Read from './Want_To_Read'
import Read from './Read'
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import { useState, useEffect } from "react";


const ListBooks = () => {



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

          <Currently_Reading books={books} setBooks={setBooks} key={1} />
          <Want_To_Read books={books} setBooks={setBooks} key={2} />
          <Read books={books} setBooks={setBooks} key={3} />
        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks