import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserReviews } from "../../actions/actions";
import moment from "moment-js";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

class UserReviews extends Component {
  componentDidMount() {
    this.props.dispatch(getUserReviews(this.props.user.login.id));
  }
  showUserPosts = userReviews =>
    userReviews
      ? userReviews.map(ur => (
          <tr key={ur._id}>
            <td>{ur.name}</td>
            <td>{ur.author}</td>
            <td>{moment(ur.createAt).format("MM/DD/YY")}</td>
            <td>
              <Link to={`/user/edit_post/${ur._id}`}>
                <FontAwesome name="edit" color="blue" />
              </Link>
            </td>
          </tr>
        ))
      : null;

  render() {
    const user = this.props.user;
    return (
      <div>
        <h4>Your reviews</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Date</th>
              <th></th>
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
