import "../../css/App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Search from './Search';
import ListBooks from './ListBooks';
import * as BooksAPI from '../../BooksAPI'

const App = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getBooks()
  }, [])






  return (
    <Routes>
      <Route exact path="/" element={<ListBooks books={books} />} />
      <Route path="/search" element={<Search setBooks={setBooks} />} />

    </Routes>
  );
}

export default App;
