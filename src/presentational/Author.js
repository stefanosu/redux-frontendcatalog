import React, { useEffect} from 'react'; 
import { fetchAuthor } from '../actions/authorAction'
import { connect } from 'react-redux';
import   Book  from '../container/Book';

const Author = ({ dispatch, loading, authors, hasErrors, }) => {
  
  useEffect(() => {
    dispatch(fetchAuthor())
  }, [dispatch])
  
  const renderAuthor = () => {
    return authors.map(author => <Book author={author.id} authorName={author.name} />) 
    
  }   
    return (  
      <div>
        <span> 
          <h3>Author Page</h3>
          {renderAuthor()}
        </span>
      </div>
    );
  }

const mapStateToProps = state => ({
  loading: state.author.loading,
  author: state.author.Author,
  hasErrors: state.categories.hasErrors,
})


export default connect(mapStateToProps)(Author)
