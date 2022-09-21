
import * as BooksAPI from '../BooksAPI'
const Book = ({ book, setBooks }) => {

  return (
    <li key={book.pageCount}>
      <div className="book">
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
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option >
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors.map((author) => (
          <div className="book-authors">{author}</div>
        ))}
      </div>
    </li >
  )
}

export default Book