import Shelf from "./Shelf"

const Want_To_Read = ({ books, setBooks }) => {

  books = books.filter((e) => {
    return e.shelf === "wantToRead"
  })


  return (
    < Shelf books={books} setBooks={setBooks} title={"Want to Read"} />
  )
}

export default Want_To_Read