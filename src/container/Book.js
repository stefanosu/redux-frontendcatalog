import React from 'react'
import { Link } from 'react-router-dom'

export const Book = ({book, excerpt, onDelete}) => { 
  const author = book.author;
  const category = book.categoryName;
  return (

  <article className={excerpt ? 'book-excerpt' : 'book'}>
    <h2>{book.title}</h2>
    
    <img src={book.img} alt={`${book.title} Book Cover`}/>

    {category &&
      <p>{category}</p>
    }

    {author &&
      <>
      <span>{author.name}</span>
      <p>{author.bio}</p>
      </>
    }

  
    {excerpt && (
      <Link to={`/book/${book.id}`} className="button">
        View Book
      </Link>
    )}

    {onDelete && <button onClick={onDelete}>Delete</button>}
  </article>
)}