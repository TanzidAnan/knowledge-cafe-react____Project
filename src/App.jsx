
import { useState } from 'react'
import './App.css'
import Blogs from './Compontents/Blogs/Blogs'
import BookMarks from './Compontents/BookMarks/BookMarks'
import Header from './Compontents/Header/Header'

function App() {
  const [bookMarks,setBookMarks] =useState([]);

  const hendleAddToBookMarks = (blog) =>{
    console.log('Book Mark',blog)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex w-[80%] mx-auto'>
        <Blogs hendleAddToBookMarks={hendleAddToBookMarks}></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
