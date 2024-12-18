
import { useState } from 'react'
import './App.css'
import Blogs from './Compontents/Blogs/Blogs'
import BookMarks from './Compontents/BookMarks/BookMarks'
import Header from './Compontents/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const hendleAddToBookMarks = (blog) => {
    // setBookMarks('Book Mark',blog);
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
    console.log(newBookMarks)
  }

  const hendleAddMarkAsRead =(id,time) =>{
    setReadingTime(readingTime+time);
    console.log('remove bookMark', id);
    const reamingBookMarks =bookMarks.filter(bookMark => bookMark.id !== id);
    setBookMarks(reamingBookMarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex w-[80%] mx-auto'>
        <Blogs hendleAddToBookMarks={hendleAddToBookMarks} hendleAddMarkAsRead={hendleAddMarkAsRead}></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  )
}

export default App
