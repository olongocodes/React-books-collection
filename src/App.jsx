import { useState } from 'react'
import React from 'react'
import './App.css'
import Books from './Books'

function App() {
  
  return (
    <>
      <Books title="Mathematics" author="Nelson" pageNumber={1000}/>
      <Books title="Science" author="Joyce" pageNumber={4300}/> 
      <Books title="History" author="James" pageNumber={1500}> <h3>The pillars of the government</h3>
      </Books> 
      
    </>
  )
}

export default App

    //working with lists
// function App(){
//   let books=[
//       {id:1, title:"Mathematics", author:"Joel", pageNumber:1233 },
//       {id:1, title:"Science", author:"Margaret", pageNumber:1000 },
//       {id:1, title:"History", author:"Bonface", pageNumber:1550 },
//       {id:1, title:"Kiswahili", author:"Kevin", pageNumber:10020 }
//   ]
//   return(
//       <>
//           {books.map(book =>(
//               <Books title={book.title} author={book.author} pageNumber={book.pageNumber} key={book.id}/>
//           ))}
//       </>
//   )
// }
// export default App


