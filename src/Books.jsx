import React from "react";
    //using props
// function Books(props) {
//   return (
//     <>
        
//       <div>
//         <h1>Book title: {props.title}</h1>
//         <h2>Author: {props.author}</h2>
//         <h3>Pages: {props.pageNumber}</h3>
//       </div>

//     </>
//   );
// }
// export default Books 

        //Destrucruring 
function Books({title, author, pageNumber, children}) {
    return (
      <>
          
        <div>
          <h1>Book title: {title}</h1>
          <h2>Author: {author}</h2>
          <h3>Pages: {pageNumber}</h3>
          {children}
        </div>
  
      </> 
    );
  }
  export default Books 

