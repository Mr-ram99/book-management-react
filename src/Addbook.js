import Bookform from './Bookform'
import React from 'react'
const Addbook = ({books, setBooks}) => {
  const handleOnSubmit=(book)=>{
    setBooks([...books, book]);
    // history.push('/');
    // console.log(book);
  }
  return (
    <>
    <Bookform handleOnSubmit = {handleOnSubmit} />
    </>
  )
}

export default Addbook