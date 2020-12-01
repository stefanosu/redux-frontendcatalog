import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categoriesAction'

import {fetchBook } from '../actions/bookAction'
import { fetchAuthor } from '../actions/authorAction'

import Book  from '../container/Book'
import { Author } from '../container/Author'
import UpdateBookForm from './UpdateBookForm'

const SingleBook = ({
  match,
  dispatch,
  book,
  hasErrors,
  loading,
  categories,
}) => {
  const { id } = match.params

  const [newBook, setBook] = useState();
  const [updateBook, setUpdateBook] = useState(false);

  useEffect(() => {
    console.log(id);
    dispatch(fetchCategories())
    dispatch(fetchBook(id))
    

    // dispatch(fetchAutchor(id))
    console.log(book, id)
  

  }, [dispatch, match, updateBook, book])

  const getCategory = (id) => {
    return categories.filter((category) =>  { 
      console.log(categories)
      return category.id === id 
    })[0];
  }
  
  useEffect(() => {

    console.log(book)
    if (newBook === undefined && book !== undefined && categories !== undefined) {
        const {author_id, category_id} = book;

        const categoryName = getCategory(category_id).name;
        fetch(`http://localhost:3000/author/${author_id}`)
        .then(response => { 
          console.log(response)
          return response.json()})
        .then(json => {
          console.log(json) 
          return setBook({...book, categoryName,  author: json}) 
        })
        .catch(error => console.log(error))
    }
  }, [book])

  

  const renderBook = () => {
    if (loading.book) return <p>Loading book...</p>
    if (hasErrors.book) return <p>Unable to display book.</p>
  }



  const renderAuthor = () => {
    // if (loading.author) return <p>Loading authors...</p>
    // if (hasErrors.author) return <p>Unable to display author.</p>
  
    return (
      <>
      {newBook &&
      <Book key={newBook.id}  book={newBook}/>
      }
      </>
    )
  }

  return (
    <section>
    { updateBook 
      ? <UpdateBookForm book={newBook} onUpdate={()=> { 
        setUpdateBook(false)
        

      }}/>
      : 
      <>
        {renderBook()}
        <h2>Book</h2>
        {newBook && renderAuthor()}
        <button onClick={() => setUpdateBook(true)}>Update Book Info</button>
      </>
      
    }
    </section>
  )
}

const mapStateToProps = state => ({
  book: state.book.book,
  authors: state.authors.authors,
  loading: { books: state.books.loading, authors: state.authors.loading },
  hasErrors: { books: state.books.hasErrors, authors: state.authors.hasErrors },
  categories: state.categories.categories,
})



export default connect(mapStateToProps)(SingleBook)
