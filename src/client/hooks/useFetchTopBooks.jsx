import {useState, useEffect} from 'react';

const apiKey = process.env.REACT_APP_API_KEY;

function useFetchTopBooks() {
  const [topBooks, setTopBooks] = useState([]);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`)
    .then((res) => res.json())
    .then((res) => setTopBooks(res.results.books))
  }, [])
  
  return topBooks;
}

export default useFetchTopBooks;