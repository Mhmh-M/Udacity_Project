
import * as BooksAPI from '../BooksAPI'
const Book = ({ book, setBooks }) => {
  const shelfNames = { "Currently Reading": "currentlyReading", "Want to Read": "wantToRead", "Read": "read", "None": "none" }

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

              {Object.values(shelfNames).map((shelf, index) => {
                return shelf !== book.shelf && book.hasOwnProperty('shelf') ? (
                  <option value={`${shelf}`}>{Object.keys(shelfNames)[index]}</option>
                ) : (
                  <option value={`${book.shelf}`} selected>{Object.keys(shelfNames)[index]}</option>
                );
              })}

            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors !== undefined && book.authors.map((author) => (
          <div className="book-authors">{author}</div>
        ))}
      </div>
    </li >
  )
}

export default Book

