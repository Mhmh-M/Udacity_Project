import Book from "./Book"

const Want_To_Read = ({ books, setBooks }) => {

  books = books.filter((e) => {
    return e.shelf === "wantToRead"
  })


  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
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

export default Want_To_Read