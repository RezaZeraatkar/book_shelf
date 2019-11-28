import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getUsers, registerUser } from "../../actions/actions";
import { timingSafeEqual } from "crypto";

class Register extends PureComponent {
  state = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorMessage: "",
    successMessage: "",
    error: null
  };

  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.user.status &&
      prevProps.user.allUsers.length < this.props.user.allUsers.length
    ) {
      return this.setState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        errorMessage: "",
        successMessage: "user Successfully added."
      });
    } else if (this.props.user.status === false && this.state.error) {
      this.setState({
        error: false,
        errorMessage:
          "Oops! something goes wrong with your information. check your email and password.",
        successMessage: ""
      });
    }
  }

  handleInputEmail = e => {
    this.setState({ email: e.target.value });
  };

  handleInputPassword = e => {
    this.setState({ password: e.target.value });
  };

  handleInputConfirmPassword = e => {
    this.setState({ confirmPassword: e.target.value });
  };

  handleInputName = e => {
    this.setState({ name: e.target.value });
  };

  handleInputLastname = e => {
    this.setState({ lastname: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.setState({ error: true });
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      this.props.dispatch(
        registerUser(
          {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            lastname: this.state.lastname
          },
          this.props.user.allUsers
        )
      );
    }
  };

  showUsers = users =>
    users.allUsers
      ? users.allUsers.map(eachUser => (
          <tr key={eachUser._id}>
            <td>{eachUser.name}</td>
            <td>{eachUser.lastname}</td>
            <td>{eachUser.email}</td>
          </tr>
        ))
      : null;

  render() {
    const users = this.props.user;
    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Sign Up</h2>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleInputName}
            />
            <input
              type="text"
              placeholder="Enter lastname"
              value={this.state.lastname}
              onChange={this.handleInputLastname}
            />
            <input
              type="email"
              placeholder="* Enter email"
              value={this.state.email}
              onChange={this.handleInputEmail}
            />
            <input
              type="password"
              placeholder="* Enter password"
              value={this.state.password}
              onChange={this.handleInputPassword}
            />
            <p>* (at least 6 characters)</p>
            <input
              type="password"
              placeholder="* Re-enter password"
              value={this.state.confirmPassword}
              onChange={this.handleInputConfirmPassword}
            />
          </div>
          <button type="submit">SignUp</button>
          <div className="error">{this.state.errorMessage}</div>
          <div className="successMessage">{this.state.successMessage}</div>
        </form>
        <hr />
        <h3>Current Users</h3>
        <div className="current_users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{this.showUsers(users)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Register);
