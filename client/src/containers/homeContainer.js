import React, { Component } from "react";
import { connect } from "react-redux";
import { getBooks } from "../actions/actions";
import BookItem from "../widgetsUI/bookItem";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getBooks(1, 0, "desc"));
  }

  renderItems = books =>
    books.list
      ? books.list.map((book, i) => <BookItem {...book} key={book._id} />)
      : null;

  loadmore = () => {
    let count = this.props.books.list.length;
    this.props.dispatch(getBooks(1, count, "desc", this.props.books.list));
  };

  render() {
    return (
      <div>
        {this.renderItems(this.props.books)}
        <div className="loadmore" onClick={this.loadmore}>
          Load More
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(HomeContainer);
