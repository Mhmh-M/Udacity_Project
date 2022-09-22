import Shelf from "./Shelf"

const Currently_Reading = ({ books, setBooks }) => {


  books = books.filter((e) => { return e.shelf === "currentlyReading" })
  return (
    < Shelf books={books} setBooks={setBooks} title={"Currently Reading"} />
  )
}

export default Currently_Reading