import {useState} from 'react';

const SelectedBooks = ({myReadingList, deleteFromList}) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [bookIndex, setBookIndex] = useState(null)
  const [bookIndex2, setBookIndex2] = useState([])


  function handleDeleteButtonToggle(index) {
    setBookIndex(index)
    setShowDeleteButton(!showDeleteButton)
  }

  function markAsRead(index) {
    if (!bookIndex2.includes(index)) {
      setBookIndex2((prev) => [...prev, index])
    } else {
      setBookIndex2(bookIndex2.filter((prev) => prev !== index))
    }
  }

  return (
    <div>
      <h1>My List of Reads</h1>
      {myReadingList.map((book, idx) => (
        <div key={book.title}
        onClick={() => markAsRead(idx)}
        onMouseOver={() => handleDeleteButtonToggle(idx)}
        onMouseOut={handleDeleteButtonToggle}
        style={{
          opacity: bookIndex2.includes(idx) ? '.5' : '1'
        }}
        >
          <p>{book.title}</p>
          <p>by {book.author}</p>
          <img src={book.book_image}
          alt='Book cover'
          />
          {showDeleteButton && idx === bookIndex && <button onClick={() => deleteFromList(book)}>Delete Book</button>}
        </div>
      ))}
    </div>
  )
}

export default SelectedBooks;