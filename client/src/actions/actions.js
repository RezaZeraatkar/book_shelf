import axios from "axios";

export function getBooks(limit = 10, start = 0, order = "asc", prevBooksList) {
  const books = axios
    .get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
    .then(response => {
      if (prevBooksList) {
        return [...prevBooksList, ...response.data];
      } else return response.data;
    })
    .catch(err => console.log("error Loading Data from server"));

  return {
    type: "GET_BOOKS",
    payload: books
  };
}

export function getBookWithReviewer(bookId) {
  const request = axios.get(`/api/getBook?id=${bookId}`);

  return dispatch => {
    request.then(({ data }) => {
      let book = data;

      axios.get(`/api/getReviewer?id=${book.ownerID}`).then(({ data }) => {
        let response = {
          book,
          reviewer: data
        };

        dispatch({
          type: "GET_BOOK_WITH_REVIEWER",
          payload: response
        });
      });
    });
  };
}

export function clearBookWithReviewer() {
  return {
    type: "CLEAR_BOOK_WITH_REVIEWER",
    payload: {
      book: {},
      reviewer: {}
    }
  };
}

export function loginUser({ email, password }) {
  const request = axios
    .post("/api/login", { email, password })
    .then(response => response.data);
  return {
    type: "LOGIN_USER",
    payload: request
  };
}

export function auth() {
  const request = axios.get("/api/auth").then(response => response.data);
  return {
    type: "USER_AUTH",
    payload: request
  };
}

export function addBook(review) {
  const reviewData = axios
    .post("/api/book", review)
    .then(response => response.data);

  return {
    type: "ADD_BOOK",
    payload: reviewData
  };
}

export function clearNewBook() {
  return {
    type: "CLEAR_NEW_BOOK",
    payload: null
  };
}

export function getUserReviews(userId) {
  const userReviews = axios
    .get(`/api/user_posts?userId=${userId}`)
    .then(response => response.data);
  return {
    type: "GET_USER_POSTS",
    payload: userReviews
  };
}

export function getBook(bookId) {
  const book = axios
    .get(`/api/getBook?id=${bookId}`)
    .then(response => response.data);
  return {
    type: "GET_BOOK",
    payload: book
  };
}

export function updateBook(newBook) {
  const editedData = axios
    .post("/api/book_update", newBook)
    .then(response => response.data);

  return {
    type: "UPDATE_BOOK",
    payload: editedData
  };
}

export function deleteReview(bookId) {
  const deletedBook = axios
    .delete(`/api/delete_book/?id=${bookId}`)
    .then(response => response.data);

  return {
    type: "DELETE_BOOK",
    payload: deletedBook
  };
}

export function clearBook() {
  return {
    type: "CLEAR_BOOK",
    payload: {
      book: null,
      status: false,
      isPostDeleted: false
    }
  };
}

export function getUsers() {
  const users = axios.get("/api/users").then(response => response.data);
  return {
    type: "GET_USERS",
    payload: users
  };
}

export function registerUser(user, userList) {
  const regUsers = axios.post(`/api/register`, user);

  return dispatch => {
    regUsers
      .then(({ data }) => {
        const response = {
          success: data.success,
          users: [...userList, data.user]
        };

        dispatch({
          type: "USER_REGISTER",
          payload: response
        });
      })
      .catch(err => {
        const response = {
          success: false,
          users: [...userList]
        };
        dispatch({
          type: "USER_REGISTER",
          payload: response
        });
      });
  };
}

export function logoutUser() {
  const logout = axios.get(`/api/logout`).then(response => response.data);

  return {
    type: "LOGOUT",
    payload: logout
  };
}

export function clearUserData() {
  return {
    type: "CLEAR_USER_DATA",
    payload: null
  };
}
