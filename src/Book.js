import React from 'react'

const Book = ({book, handleRemoveBook}) => {
  return (
    <tr className='table-primary'>
        <td>{book.bookname}</td>
        <td>{book.author}</td>
        <td>{book.genre}</td>
        <td>{book.price}</td>
        <td><button className='btn-danger' onClick={() => handleRemoveBook(book.id)}>Delete</button></td>
    </tr>
  )
}

export default Book