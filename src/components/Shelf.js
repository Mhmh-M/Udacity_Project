import Book from "./Book"
const Shelf = ({ books, setBooks, title }) => {

  return (
    <div className="bookshelf" >
      <h2 className="bookshelf-title">{title}</h2>
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
export default Shelf