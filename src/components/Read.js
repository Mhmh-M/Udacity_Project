import Shelf from "./Shelf"


const Read = ({ books, setBooks }) => {

  books = books.filter((e) => { return e.shelf === "read" })


  return (
    < Shelf books={books} setBooks={setBooks} title={"Read"} />
  )
}

export default Read