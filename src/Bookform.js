import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid'; 
const Bookform = (props) => {
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "bookname": setBookname(value); break;
      case "author": setAuthor(value); break;
      case "genre": setGenre(value); break;
      case "price": setPrice(value); break;
    }
  }

  const handleOnSubmit = (event) => {
    const values = [bookname, author, genre, price];
    // console.log(book);
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });
    if(allFieldsFilled){
      const book = { id: uuidv4(), bookname, author, genre, price, date: new Date()} ;
      props.handleOnSubmit(book);
      event.preventDefault();
      alert("Book Added Successfully");
    }
    else {
      alert("Please fill all the fields!!!");
    }
  }


  const resetForm =(event)=>{
    event.preventDefault();
    setBookname("");
    setAuthor("");
    setGenre("");
    setPrice("");
  }
  return (
    <div className='main-form w-50 mx-auto py-3'>
      <Link to="/"><button className='btn btn-secondary'>Back</button></Link>
      <h3 className='text-center'>Fill The details</h3>
      <form id='form' className='bg-secondary p-3 text-white'>
        <div className="mb-3">
          <label htmlFor="bookname" className="form-label">Book Name</label>
          <input type="text" className="form-control" id="bookname" placeholder="Enter Book Name" name="bookname" value={bookname} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" id="author" placeholder="Enter Author Name" name="author" value={author} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre</label>
          <input type="text" className="form-control" id="genre" placeholder="Enter Genre of Book" name="genre" value={genre} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="price" placeholder="Enter Book Price" name="price" value={price} onChange={handleInputChange} />
        </div>
        <div className='d-flex justify-content-between'>
          <button className='btn btn-primary' onClick={handleOnSubmit}>Submit</button>
          <button className='btn btn-primary' onClick={resetForm} > Reset </button>
        </div>
      </form>
    </div>
  )
}

export default Bookform