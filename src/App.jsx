
import './App.css'
import Blogs from './Compontents/Blogs/Blogs'
import BookMarks from './Compontents/BookMarks/BookMarks'
import Header from './Compontents/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <div className='md:flex w-[80%] mx-auto'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
