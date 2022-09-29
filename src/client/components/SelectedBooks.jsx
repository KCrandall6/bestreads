



const SelectedBooks = ({myReadingList}) => {


  return (
    <div>
      <h1>My List of Reads</h1>
      {myReadingList.map((book) => (
        <div key={book.title}>
          <p>{book.title}</p>
          <p>by {book.author}</p>
          <img src={book.book_image} />
        </div>
      ))}
    </div>
  )
}

export default SelectedBooks;