import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getBook,
  updateBook,
  clearBook,
  deleteReview
} from "../../actions/actions";

class EditReview extends Component {
  state = {
    isEmpty: true,
    formData: {
      _id: this.props.match.params.id,
      name: "",
      author: "",
      review: "",
      pages: "",
      rating: "",
      price: ""
    }
  };

  componentDidMount() {
    this.props.dispatch(getBook(this.props.match.params.id));
  }

  componentDidUpdate(prevProps, prevState) {
    const { book } = this.props.books;
    if (this.props.books.hasOwnProperty("book") && prevState.isEmpty) {
      this.setState({
        formData: {
          _id: book._id,
          name: book.name,
          author: book.author,
          review: book.review,
          pages: book.pages,
          price: book.price,
          rating: book.rating
        },
        isEmpty: false
      });
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearBook());
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
    this.props.dispatch(updateBook(this.state.formData));
  };

  deleteBook = () => {
    this.props.dispatch(deleteReview(this.props.match.params.id));
  };

  redirectUser = () => {
    setTimeout(() => {
      this.props.history.push("/user/userReviews");
    }, 1000);
  };

  render() {
    const books = this.props.books;
    return (
      <div className="rl_container article">
        {books.status ? (
          <div className="edit_confirm">
            post updated!,{" "}
            <Link to={`/books/${books.book._id}`}>
              Click here to see your post
            </Link>
          </div>
        ) : null}
        {books.isPostDeleted ? (
          <div className="red_tag">
            Post deleted!
            {this.redirectUser()}
          </div>
        ) : null}
        <form onSubmit={this.submitForm}>
          <h2>Edit review</h2>
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
          <button type="submit">Edit Review</button>
          <div className="delete_post">
            <div className="button" onClick={this.deleteBook}>
              Delete review
            </div>
          </div>
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

export default connect(mapStateToProps)(EditReview);
