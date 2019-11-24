import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserReviews } from "../../actions/actions";
import moment from "moment-js";
import { Link } from "react-router-dom";

class UserReviews extends Component {
  componentDidMount() {
    this.props.dispatch(getUserReviews(this.props.user.login.id));
  }
  showUserPosts = userReviews =>
    userReviews
      ? userReviews.map(ur => (
          <tr key={ur._id}>
            <td>
              <Link to={`/user/edit_post/${ur._id}`}>{ur.name}</Link>
            </td>
            <td>{ur.author}</td>
            <td>{moment(ur.createAt).format("MM/DD/YY")}</td>
          </tr>
        ))
      : null;

  render() {
    const user = this.props.user;
    return (
      <div className="user_posts">
        <h4>Your reviews</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.showUserPosts(user.userReviews)}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(UserReviews);
