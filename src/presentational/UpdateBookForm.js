import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchCategories } from '../actions/categoriesAction';
import {fetchAuthors} from '../actions/authorsAction'


const UpdateBookForm = ({book, authors, categories, dispatch, onUpdate}) => {
  const [localBook, updateBook] = useState(book);
  const [addNewAuthorStatus, updateAddNewAuthorStatus] = useState('')

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchAuthors());
  }, [dispatch])

  const updateBookRequest = async (e) => {
    e.preventDefault();
    let author;
    if (localBook.author_id === -1) {
      const authorResponse = fetch(`http://localhost:3000/author`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.addAuthorName,
          bio: '',
        })
      })

      author = await authorResponse.json()
    }

    const patchResponse =  await fetch(`http://localhost:3000/book/${localBook.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...localBook,
        author_id: author !== undefined ? author.id : localBook.author_id
      })
    })

    

    onUpdate()
  }

  return (
    <form onSubmit={updateBookRequest}>
      <label>Title:</label>
      <input type='text' value={localBook.title} onChange={(e) => updateBook({...localBook, title: e.target.value})}/>
      <label>Img:</label>
      <input type='text' value={localBook.img} onChange={(e) => updateBook({...localBook, img: e.target.value})}/>
      <label>Author:</label>
      <select value={localBook.author_id} onChange={(e) => updateBook({...localBook, author_id: e.target.value})}>
        {authors.map((author) => <option value={author.id}>{author.name}</option>)}
        <option value={-1}>{'Add New Author'}</option>
      </select>
      {localBook.author_id === -1 &&
        <input type='text' value={updateAddNewAuthorStatus} onChange={(e) => updateAddNewAuthorStatus(e.target.value)}/>
      }
      <label>Category:</label>
      <select value={localBook.category_id} onChange={(e) => updateBook({...localBook, category_id: e.target.value})}>
        {categories.map((category) => <option value={category.id}>{category.name}</option>)} 
      </select>
      <input type="submit" value="Update" />
    </form>
  );
}

const mapDispatchToProps = state => ({
  authors: state.authors.authors,
  categories: state.categories.categories,

})

export default connect(mapDispatchToProps)(UpdateBookForm);