import React, {useState} from "react";
import useFetchTopBooks from "../hooks/useFetchTopBooks";

const BestSellers = ({addToReadList}) => {

  const bookList = useFetchTopBooks();



  return (
    <div>
      <h1>Best Sellers List</h1>
      {bookList.map((book) => (
        <div key={book.title} onClick={() => addToReadList(book)}>
          <p>{book.title}</p>
          <p>by {book.author}</p>
          <img src={book.book_image} />
        </div>
      ))}
    </div>
  )
}

export default BestSellers;