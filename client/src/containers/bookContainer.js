import React, { Component } from "react";
import { connect } from "react-redux";
import { getBookWithReviewer, clearBookWithReviewer } from "../actions/actions";

class bookContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getBookWithReviewer(this.props.id));
  }
  componentWillUnmount() {
    this.props.dispatch(clearBookWithReviewer());
  }
  renderBooks(bwr) {
    if (bwr.book) {
      return (
        <div className="br_container">
          <div className="br_header">
            <h2>{bwr.book.name}</h2>
            <h5>{bwr.book.author}</h5>
            <span>
              Review By: {bwr.reviewer.name} {bwr.reviewer.lastname}
            </span>
          </div>
          <div className="br_review">{bwr.book.review}</div>
          <div className="br_box">
            <div className="left">
              <div>
                <span>Pages:</span>
                {bwr.book.pages}
              </div>

              <div>
                <span>Price:</span> {bwr.book.price}
              </div>
            </div>
            <div className="right">
              <span>Rating:</span>
              <div>{bwr.book.rating}/5</div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    let book_w_reviewer = this.props.books_with_reviewer;
    return <div>{this.renderBooks(book_w_reviewer)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    books_with_reviewer: state.books
  };
}

export default connect(mapStateToProps)(bookContainer);
