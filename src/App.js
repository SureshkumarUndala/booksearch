import React, { useState } from 'react';
import './App.css';
import axios from "axios"

 
function App() {

  const [book, setbook] = useState("")
  const [result, setresult] =useState([])

  const handlechange = (e) =>{
    const book = e.target.value
    setbook(book)

   

  }
   const handlesubmit = (e) =>{
    e.preventDefault()
    // console.log(book)
    axios.get("https://www.googleapis.com/books/v1/volumes?q=%booksearch")
    .then((data) =>setresult(data.data.items))
     console.log(result)



   }



  return (
    <div className='container '>
      <h2>Book Search App</h2>
      <form onSubmit={handlesubmit}>
        <div className='form-group mt-3'>
          <input type="text" onChange={handlechange} className="form-control" placeholder="search for books" autoComplete="off" />

        </div>

        <button type="search" className='btn btn-danger mt-2'><i class="fa fa-search"></i></button>
        
      </form>
      <div className='bookContainer'>
      {result.map((book)=>(
       
        <div className='card'>
        <a href={book.volumeInfo.previewLink}>
        <img src={book.volumeInfo.imageLinks.thumbnail}  alt={book.title}/>
        </a>
        </div>
     
   
      ))}
         </div>

    </div>

  
  );
}

export default App;
