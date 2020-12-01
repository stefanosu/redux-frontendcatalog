import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/booksAction'
import  Book  from '../container/Book'
import BookForm from '../container/bookForm'


const BooksPage = ({ dispatch, loading, books, hasErrors }) => {

  const [isAddingBook, setIsAddingBook] = useState(false)
  
  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  const onDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/book/${id}`, {
      method: 'DELETE',
    });

    dispatch(fetchBooks());
  }

  const renderBooks = () => {
    if (loading) return <p>Loading books...</p>
    if (hasErrors) return <p>Unable to display books.</p>

    return books.map(book => <Book key={book.id} book={book} excerpt onDelete={() => onDelete(book.id)} />)
  }



  const showHideAddBookForm = () => {
    setIsAddingBook(!isAddingBook)
    dispatch(fetchBooks())
  }
  
  const onSubmit = () => {
      showHideAddBookForm();
  }
  return (
    <>
  {isAddingBook 
    ? ( 
      <>
      <BookForm onSubmit={onSubmit} />
      <button onClick={showHideAddBookForm}>Cancel</button>
    </>
    )
    : (
      <>
      <button onClick={showHideAddBookForm}>Add Book</button>
      <section>
      <h1>Books</h1>
      {renderBooks()}
    </section>
    </>
    )
  }
    </>
  )
}

const mapStateToProps = state => ({
  loading: state.books.loading,
  books: state.books.books,
  hasErrors: state.books.hasErrors,
  categories: state.categories.categories,

})

export default connect(mapStateToProps)(BooksPage)


