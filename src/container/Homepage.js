import React from 'react'; 
import { Link } from 'react-router-dom'
import {getBooks } from '../actions/booksAction';
import {connect} from 'react-redux'

class HomePage extends React.Component {

  componentDidMount() {
    this.props.getBooks()
    console.log('fetching books!!' );
  }

  render() { 
    return ( 
      <div> 
        <h1> This is the HomePage!</h1>
        <Link to='/books'>Books Page! </Link>  
        <span><button onClick={getTheBooks}> Click me </button></span>
      </div>
      );
  }
}

const getTheBooks = (e) => {
  console.log(getBooks)
  console.log('get the bookkks!!', e);
} 


const mapDispatchToProps = { 
  getBooks 
}

const mapStateToProps = state => {
  console.log('mapping state to props', state);
  return state
}

export default connect (mapStateToProps, mapDispatchToProps)(HomePage);