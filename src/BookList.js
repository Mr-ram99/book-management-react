import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book';
const BookList = ({ books, setBooks}) => {
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <div className='container py-3'>
      <Link to="/"><button className='btn btn-secondary'>Back</button></Link>
      {books.length!==0?<>
      <h3 className='text-center'> List Of Books</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Name Of Book</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {books.map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook}/>
          ))}
        
        </tbody>
      </table> </>
      : <div><h3 className='text-center p-2'>No books to display</h3></div>}
    </div>
  )
}

export default BookList