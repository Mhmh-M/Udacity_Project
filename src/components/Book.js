import * as BooksAPI from '../BooksAPI'
const Book = ({ book, setBooks }) => {
  return (

    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                book.imageLinks !== undefined && `url("${book.imageLinks.smallThumbnail}")`,
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
            }} defaultValue={book.hasOwnProperty('shelf') ? `${book.shelf}` : "none"}>

              <option disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option >


            </select>
          </div>
        </div>
        {book.title !== undefined && <div className="book-title">{book.title}</div>}
        {book.authors !== undefined && book.authors.map((author) => (
          <div className="book-authors">{author}</div>
        ))}
      </div>
    </li >
  )
}

export default Book

