import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../actions/actions";

export default function(ComposedClass, restricted) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true
    };

    componentDidMount() {
      this.props.dispatch(auth());
    }

    componentDidUpdate(prevProps) {
      if (prevProps.user.login !== this.props.user.login) {
        this.setState({ loading: false });
        if (!this.props.user.login.isAuth) {
          if (restricted) this.props.history.push("/login");
        } else {
          if (restricted === false) this.props.history.push("/user");
        }
      }
    }

    render() {
      if (this.state.loading) {
        return <div className="loader"></div>;
      }
      return <ComposedClass {...this.props} user={this.props.user} />;
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }
  return connect(mapStateToProps)(AuthenticationCheck);
}
