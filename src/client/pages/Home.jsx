import {useState} from 'react'
import BestSellers from "../components/BestSellers";
import SelectedBooks from "../components/SelectedBooks";

const Home = () => {

  const [myReadingList, setMyReadingList] = useState([]);

  const addToReadList = (newBook) => {
    if (!myReadingList.includes(newBook)) {
      setMyReadingList((prev) => [...prev, newBook])
    }
  }

  console.log('myReading List', myReadingList)

  return (
    <div>
      <h1>Bestreads</h1>
      <BestSellers addToReadList={addToReadList}/>
      <SelectedBooks myReadingList={myReadingList}/>
    </div>
  )
}

export default Home;