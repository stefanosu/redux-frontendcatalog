// import React from 'react'


// const BookList = ({book}) => {
    
//     return(
//         <div className='Channel-Card'>
//             These are the Channels:
//             <strong>{book.title}</strong>
//         </div>
//     )
// }


//     export default BookList 


// import React, { useEffect } from 'react'
// import { connect } from 'react-redux'

// import { fetchBooks } from '../actions/booksActions'

// import { Post } from '../components/Post'

// const booksPage = ({ dispatch, loading, books, hasErrors }) => {
//   useEffect(() => {
//     dispatch(fetchBooks())
//   }, [dispatch])

//   const renderBooks = () => {
//     if (loading) return <p>Loading posts...</p>
//     if (hasErrors) return <p>Unable to display posts.</p>

//     return books.map(post => <Post key={post.id} post={post} excerpt />)
//   }

//   return (
//     <section>
//       <h1>books</h1>
//       {renderBooks()}
//     </section>
//   )
// }

// const mapStateToProps = state => ({
//   loading: state.books.loading,
//   books: state.books.books,
//   hasErrors: state.books.hasErrors,
// })

// export default connect(mapStateToProps)(booksPage)
