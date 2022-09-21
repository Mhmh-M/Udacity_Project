import Book from "./Book"



const Read = ({ books, setBooks }) => {

  books = books.filter((e) => { return e.shelf === "read" })


  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">

          {books.map((book) => (
            <Book book={book} setBooks={setBooks} key={book.id} />
          ))}
        </ ol>
      </div>
    </div>
  )
}

export default Read