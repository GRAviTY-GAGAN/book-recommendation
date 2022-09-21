import React from 'react';
import './BookCard.css';
import '../App.css';

const BookCard = ({data}) => {
  return (
    <div className='cardMainContainer'>
      <div className='bookDetails'>
      <div className='bookName'>Book Name: <div className='color'>{data.name}</div></div>
        <div className='bookRating'>Rating: <div className='color'>{data.rating}</div> </div>
      </div>
        
    </div>
  )
}

export default BookCard;