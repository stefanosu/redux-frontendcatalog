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

    // this.rateBookHandler = (e, id) => {
    //   let target = e.target.value 
    //   if(target === book.id) {
    //     console.log('pressed', target);
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

      this.incrementBookRating = () => { 
        // let target = e.target.value 
        // if(target === id) {
        this.setState(prevState => ({
          rating: prevState.rating + 1 
        }))
      }
    // }
      
      this.decrementBookRating = () => {
        // let target = e.target.value 
        // if(target === id) {
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

          {onDelete && <button onClick={onDelete}>Delete</button>} 
          <button onChange={this.handleChange} onClick={this.incrementBookRating}>+</button>
            <span value={this.state.rating} onChange={this.handleChange}> </span>
          <input className="rate-btn" value={this.state.rating} onChange={this.handleChange}></input>
          <button onChange={this.handleChange} onClick={this.decrementBookRating}>-</button>
          <span value={this.state.rating} onChange={this.handleChange}> </span>
        </article>
      </div>
    ) 
  }
}

export default Book 