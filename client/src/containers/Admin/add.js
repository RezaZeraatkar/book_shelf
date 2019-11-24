import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addBook } from "../../actions/actions";
import { clearNewBook } from "../../actions/actions";

class AddReview extends Component {
  state = {
    formData: {
      name: "",
      author: "",
      review: "",
      pages: "",
      rating: "",
      price: ""
    }
  };

  componentWillUnmount() {
    this.props.dispatch(clearNewBook());
  }

  handleInput = (event, el) => {
    const newFormData = {
      ...this.state.formData
    };
    newFormData[el] = event.target.value;
    this.setState({
      formData: newFormData
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(
      addBook({
        ...this.state.formData,
        ownerID: this.props.user.login.id
      })
    );
  };

  showNewBook = newBook =>
    newBook.post ? (
      <div className="conf_link">
        Cool!!! You Posted a New Book Review
        <br />
        <Link to={`/books/${newBook.bookId}`}>Click here to see the post</Link>
      </div>
    ) : null;

  render() {
    return (
      <div className="rl_container article">
        <form onSubmit={this.submitForm}>
          <h2>Add a review</h2>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter Book Title"
              value={this.state.formData.name}
              onChange={event => this.handleInput(event, "name")}
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter Author"
              value={this.state.formData.author}
              onChange={event => this.handleInput(event, "author")}
            />
          </div>
          <div className="form_element">
            <textarea
              value={this.state.formData.review}
              onChange={event => this.handleInput(event, "review")}
            />
          </div>
          <div className="form_element">
            <input
              type="number"
              placeholder="Enter Number Of Pages"
              value={this.state.formData.pages}
              onChange={event => this.handleInput(event, "pages")}
            />
          </div>

          <div className="form_element">
            <select
              value={this.state.formData.rating}
              onChange={event => this.handleInput(event, "rating")}
            >
              <option value="">Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form_element">
            <input
              type="number"
              placeholder="Enter Price"
              value={this.state.formData.price}
              onChange={event => this.handleInput(event, "price")}
            />
          </div>
          <button type="submit">Add Review</button>
          {this.props.books.newBook
            ? this.showNewBook(this.props.books.newBook)
            : null}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(AddReview);
