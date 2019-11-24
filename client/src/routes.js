import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./hoc/layout";
import Home from "./components/Home/home";
import Book from "./components/Book/bookDetails";
import Login from "./containers/Admin/login";
import Auth from "./hoc/auth";
import User from "./components/Admin/admin";
import AddReview from "./containers/Admin/add";
import EditReview from "./containers/Admin/edit";
import UserReviews from "./components/Admin/userReviews";
import Logout from "./components/Admin/logout";
import Register from "./containers/Admin/register";

export default function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Auth(Home, null)} />
        <Route exact path="/login" component={Auth(Login, false)} />
        <Route exact path="/user" component={Auth(User, true)} />
        <Route exact path="/user/logout" component={Auth(Logout, true)} />
        <Route exact path="/user/add" component={Auth(AddReview, true)} />
        <Route exact path="/user/register" component={Auth(Register, true)} />
        <Route
          exact
          path="/user/edit_post/:id"
          component={Auth(EditReview, true)}
        />
        <Route exact path="/books/:id" component={Auth(Book, null)} />
        <Route
          exact
          path="/user/userReviews"
          component={Auth(UserReviews, true)}
        />
      </Switch>
    </Layout>
  );
}
