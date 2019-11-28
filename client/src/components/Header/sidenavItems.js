import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";

function SidenavItems({ user }) {
  const items = [
    {
      type: "navItem",
      icon: "home",
      text: "Home",
      link: "/",
      restricted: false
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "My Profile",
      link: "/user",
      restricted: true
    },
    {
      type: "navItem",
      icon: "sign-in",
      text: "Login",
      link: "/login",
      restricted: false,
      exclude: true
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "My Reviews",
      link: "/user/userReviews",
      restricted: true
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "Add Reviews",
      link: "/user/add",
      restricted: true
    },
    {
      type: "navItem",
      icon: "sign-out",
      text: "Logout",
      link: "/user/logout",
      restricted: true
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "Signup",
      link: "/user/register",
      restricted: false,
      exclude: true
    }
  ];

  const element = (item, i) => (
    <Link to={item.link} key={i}>
      <div className={item.type}>
        <FontAwesome name={item.icon} />
        {item.text}
      </div>
    </Link>
  );

  const showItems = () =>
    user.login
      ? items.map((item, i) => {
          if (user.login.isAuth) {
            return !item.exclude ? element(item, i) : null;
          } else {
            return !item.restricted ? element(item, i) : null;
          }
        })
      : null;

  return <div>{showItems()}</div>;
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(SidenavItems);
