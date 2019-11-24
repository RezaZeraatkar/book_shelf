import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser, clearUserData } from "../../actions/actions";

class LogoutContainer extends Component {
  componentDidMount() {
    this.props.dispatch(logoutUser);
  }

  componentWillUnmount() {
    this.props.dispatch(clearUserData);
  }

  redirectUser() {
    setTimeout(() => {
      this.props.history.push("/");
    }, 2500);
  }

  render() {
    return (
      <div className="logout_container">
        <h1>Sorry to see you go! hope i see you again :)</h1>
        {this.redirectUser()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(LogoutContainer);
