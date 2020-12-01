import React from 'react'
import { Link } from 'react-router-dom'

class Book extends React.Component {
  
  initialState = {
    display: true, 
    rating: 0 
  }
  state = this.initialState

  render() { 
    const { book, excerpt, onDelete } = this.props
    
    const author = book.author;
    const category = book.categoryName;

      this.incrementBookRating = () => { 
        this.setState(prevState => ({
          rating: prevState.rating + 1 
        }))
      }
      
      this.decrementBookRating = () => {
        this.setState(prevState => {
          if(prevState.rating > 0) {
            return {
              rating: prevState.rating - 1 
            }
          } else {
            return null 
          }
        })
    }

    this.handleChange = (event) => {
      this.setState({rating: event.target.value});
    }

    this.toggleClick = () => {
      this.setState(prevState => ({
        display: !prevState.display 
      }))
    }

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

          {onDelete && <button className='delete-btn' onClick={onDelete}>Delete</button>} 
          <button className='increase-btn' onChange={this.handleChange} onClick={this.incrementBookRating}>+</button>
            <p className='rating-score'>{this.state.rating}</p>
          <button className='decrease-btn' onChange={this.handleChange} onClick={this.decrementBookRating}>-</button>
        </article>
      </div>
    ) 
  }
}

export default Book 