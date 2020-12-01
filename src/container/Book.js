import React from 'react'
import { Link } from 'react-router-dom'

class Book extends React.Component () {
  
  initialState = {
    hasBeenSelected: false, 
    rating: 0 
  }
  state = this.initialState

  render() { 
    const { book, excerpt, onDelete } = this.props
    
    const author = book.author;
    const category = book.categoryName;

    // const rateBookHandler = (e) => {
    //   let event = e.target.value 
    //   if(event === book.id) {
    //       this.setState(
    //         prevState => ({
    //           rating: +1
    //         })
    //       )
    //   } else if (this.state.hasBeenSelected) {
    //       this.setState(
    //         prevState => ({
    //           hasBeenSelected: !false
    //         })
    //       )
    //     }
    //   }

    return (
      <div>  
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
            </>}
          {excerpt && (
            <Link to={`/book/${book.id}`} className="button">
              View Book
            </Link>
          )}

          {onDelete && <button onClick={onDelete}>Delete</button>} 
          {/* <button onClick={rateBookHandler}><span></span>Rate my book</button> */}
        </article>
      </div>
    ) 
  }
}

export default Book 