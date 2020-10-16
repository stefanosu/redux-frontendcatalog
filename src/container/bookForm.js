import React from 'react'; 
import { connect } from 'react-redux';
import {fetchCategories } from '../actions/categoriesAction';
import {fetchAuthors} from '../actions/authorsAction'


class BookForm extends React.Component {

  initialState = {
    img: '', 
    title: '', 
    selectionAuthorID: -1,
    selectionAuthorName: '',
    addedAuthorID: 0,
    addAuthorName: '',
    categoryID: -1,
    categoryName: ''

  };

  state = this.initialState;

  // (:title, :img, :author_id, :category_id)

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(this.state);
    let author;
    if (this.state.selectionAuthorID === -1) {
      let authorResponse = await fetch('http://localhost:3000/author', 
        {
          method: 'POST',
          body: JSON.stringify({
            name: this.state.addAuthorName,
            bio: '',
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      author = await authorResponse.json();
    }
      let booksResponse = await fetch('http://localhost:3000/book', {
        method: 'POST',
        body: JSON.stringify({
          title: this.state.title,
          img: this.state.img,
          author_id: author !== undefined ? author.id : this.state.selectionAuthorID,
          category_id: this.state.categoryID,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      this.setState(this.initialState);
      this.props.onSubmit();
      console.log(booksResponse)
  };

  handleChange = (e) => {
    console.log(e.target);
    this.setState({[e.target.title]: e.target.value})
    console.log(e, 'chaangeed');
  }

  handleAuthorSelect = (e) => {
    this.setState({selectionAuthorID: e.target.value})
  }

  handleAuthorUpdate = (e) => {
    this.setState({addAuthorName: e.target.value})
  }

  handleCategorySelection = (e) => {
    this.setState({categoryID: e.target.value})
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories())
    this.props.dispatch(fetchAuthors())
  }


  render() { 

    return ( 
      <div> 
        <form onSubmit={this.handleSubmit}>
          <label> 
            Title: 
            <input type='text' title='title' value={this.state.value} onChange={this.handleChange}/>
            Img:
            </label> 
            <input type='text' title='img' value={this.state.value} onChange={this.handleChange}/>

            <label>Select Author:</label>

            <select value={this.state.selectionAuthorID} onChange={this.handleAuthorSelect}>
              {this.props.authors.map(({name, id}) => <option value={`${id}`}>{name}</option>)}
              <option value={-1}>Add New Author</option>
            </select>

            {this.state.selectionAuthorID === -1 &&
              <>
              <label>Author:</label>
              <input 
                type='text' 
                title='author' 
                value={this.state.addAuthorName}
                onChange={this.handleAuthorUpdate}
                />
                </>
            }
            <label>Category:</label>

            <select value={this.state.categoryID} onChange={this.handleCategorySelection}>
              {this.props.categories.map(({id, name}) => <option value={id}>{name}</option>)}
            </select>

            <input type="submit" value="Submit" />
        </form>
      </div>
    ); 
  } 
}

  const mapDispatchToProps = state => ({
    authors: state.authors.authors,
    categories: state.categories.categories,

  })

export default connect(mapDispatchToProps)(BookForm);