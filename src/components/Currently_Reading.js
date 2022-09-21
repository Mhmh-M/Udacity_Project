import Book from "./Book"

const Currently_Reading = ({ books, setBooks }) => {


  books = books.filter((e) => { return e.shelf === "currentlyReading" })
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book book={book} setBooks={setBooks} key={book.id} />
          ))}
        </ ol>

      </div>
    </div >
  )
}

export default Currently_Reading